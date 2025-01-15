import { existsSync, mkdir, readdirSync, readFile, writeFile } from 'fs'
import { fileURLToPath } from 'url'
import { promisify } from 'util'
import { parse } from '@babel/parser'
import { join, normalize, sep } from 'path'

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
const mkdirAsync = promisify(mkdir)

const [PACKAGES_KEY, DOCS_KEY] = ['packages', 'docs']

const packagesUrl = fileURLToPath(new URL(PACKAGES_KEY, import.meta.url))
const docsUrl = fileURLToPath(new URL(DOCS_KEY, import.meta.url))

const fileTypeRegex = /\.(test|spec)\.(js|jsx|ts|tsx)$/ // 正则表达式
const fileNameRegex = /[\\/](\w+)[\\/][^\\/]+\.(test|spec)\.(js|jsx|ts|tsx)$/ // 正则表达式

// 遍历 AST 辅助函数
const traverse = (node, callback) => {
  if (!node || typeof node !== 'object') return
  callback(node)
  for (const key in node) {
    const child = node[key]
    if (Array.isArray(child)) {
      child.forEach((c) => traverse(c, callback))
    } else if (child && typeof child === 'object') {
      traverse(child, callback)
    }
  }
}
// 移除最外层的 `{ }`
const formatTestCode = (content, node) => {
  const bodyNode = node.arguments[1].body
  let testContent = content.slice(bodyNode.start, bodyNode.end) // 获取代码块

  if (testContent.startsWith('{') && testContent.endsWith('}')) {
    const notESC = bodyNode.body.filter((item) => item.type !== 'ExpressionStatement')
    const expressionStatementContent = notESC[notESC.length - 1]
    testContent = content.slice(bodyNode.start + 2, expressionStatementContent.end) // 去除首尾 `{ }` 并再次修剪空白
  }
  return testContent
}
// 生成代码片段
const generateCode = (data, node) => {
  if (!node || node.start === undefined || node.end === undefined) return ''
  return data.slice(node.start, node.end).trim()
}
// 提取 expect(function).toStrictEqual(result) 中的 function 和 result
const extractExpectDetails = (content, node) => {
  const bodyNode = node.arguments[1].body

  let expectDetails = {}

  traverse(bodyNode, (node) => {
    if (
      node.type === 'CallExpression' &&
      node.callee.type === 'MemberExpression' &&
      node.callee.object.type === 'CallExpression' &&
      node.callee.object.callee.name === 'expect' &&
      node.callee.property.name.startsWith('to')
    ) {
      expectDetails = {
        function: generateCode(content, node.callee.object.arguments[0]),
        result: generateCode(content, node.arguments[0])
      }
    }
  })
  return expectDetails
}

const getFolderNameAfterPackages = (filePath) => {
  const parts = normalize(filePath).split(sep) // 按路径分隔符分割路径
  const packagesIndex = parts.indexOf(PACKAGES_KEY) // 找到 'packages' 的索引
  if (packagesIndex !== -1 && parts.length > packagesIndex + 1) {
    return parts[packagesIndex + 1] // 返回 'packages' 后的第一个文件夹
  }
  return null // 如果未找到 'packages' 或后续没有子文件夹
}

/**
 * 生成vitest markdown前的准备
 * @param {*} fileName
 */
const beforeGenerateVitestMarkdown = async (fileName) => {
  // docs/test
  const docsTestPath = join(docsUrl, 'test')
  // 项目
  const moduleName = getFolderNameAfterPackages(fileName)
  const docsModulePath = join(docsTestPath, moduleName)
  // 类型
  const [, docsFileName] = fileName.match(fileNameRegex)
  const docsFilePath = join(docsModulePath, docsFileName)

  if (existsSync(docsTestPath) && existsSync(docsModulePath) && existsSync(docsFilePath)) {
    const fileContent = await readFileAsync(fileName, 'utf-8')
    const vitestMarkdownMap = await generateVitestMarkdown(fileContent)
    // 循环生成
    for (const key in vitestMarkdownMap) {
      if (Object.prototype.hasOwnProperty.call(vitestMarkdownMap, key)) {
        const outputPath = join(docsFilePath, `${key}.md`)
        await writeFileAsync(outputPath, vitestMarkdownMap[key], 'utf8')
      }
    }
  } else {
    if (!existsSync(docsTestPath)) await mkdirAsync(docsTestPath)
    if (!existsSync(docsModulePath)) await mkdirAsync(docsModulePath)
    await mkdirAsync(docsFilePath)
    await beforeGenerateVitestMarkdown(fileName)
  }
}

/**
 * 生成vitest markdown
 * @param {*} fileName
 */
const generateVitestMarkdown = async (fileContent) => {
  let markdownMap = {}
  const ast = parse(fileContent, { sourceType: 'module', plugins: ['typescript'] })
  // 遍历 AST 节点
  traverse(ast, (node) => {
    if (
      node.type === 'CallExpression' &&
      node.callee.name === 'describe' &&
      node.arguments.length === 2 &&
      node.arguments[1].type === 'ArrowFunctionExpression'
    ) {
      const moduleName = node.arguments[0].value // 获取测试名称

      traverse(node.arguments[1].body, (node) => {
        if (
          node.type === 'CallExpression' &&
          node.callee.name === 'test' &&
          node.arguments.length === 2 &&
          node.arguments[1].type === 'ArrowFunctionExpression'
        ) {
          const name = node.arguments[0].value // 获取测试名称
          // 移除最外层包裹的 `{ }`，如果存在
          const code = formatTestCode(fileContent, node)
          // 提取 expect(function).toStrictEqual(result) 中的 function 和 result
          const expectDetails = extractExpectDetails(fileContent, node)

          // 输出结果
          markdownMap[moduleName] = markdownMap[moduleName] || ''

          markdownMap[moduleName] += `### ${moduleName}\n\n`
          markdownMap[moduleName] += `#### ${name}\n\n`

          const content = []
          content.push(`\`\`\`typescript\n${code}\n`)
          if (expectDetails) {
            content.push(`console.log(${expectDetails.function})\n\n`)
            content.push(`/* output => ${expectDetails.result} */\n`)
          }
          markdownMap[moduleName] += content
            .map((str) => {
              const list = str.split('\n').map((item) => item.replace(/^\s{0,4}/, ''))
              return list.join('\n')
            })
            .join('')
          markdownMap[moduleName] += `\`\`\`\n\n`
        }
      })
    }
  })
  return markdownMap
}

// ==============

// 递归获取所有测试文件地址
const getTestFilesRecursive = async (dir) => {
  const files = []
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await getTestFilesRecursive(fullPath)))
    } else if (entry.isFile() && fileTypeRegex.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

const main = async () => {
  try {
    const testFiles = await getTestFilesRecursive(packagesUrl)
    testFiles.forEach(beforeGenerateVitestMarkdown)
  } catch (error) {
    console.error('获取测试文件失败:', error)
  }
}

main()
