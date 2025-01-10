import { existsSync, mkdir, readdirSync, readFile, writeFile } from 'fs'
import { fileURLToPath } from 'url'
import { promisify } from 'util'
import { parse } from '@babel/parser'

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
const mkdirAsync = promisify(mkdir)

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

const generateVitestMarkdown = async (fileName) => {
  const filePath = fileURLToPath(new URL(`${fileName}/index.spec.ts`, import.meta.url))
  const docsTestPath = fileURLToPath(new URL(`../docs/test`, import.meta.url))
  const docsModulePath = fileURLToPath(new URL(`../docs/test/${fileName}`, import.meta.url))

  if (existsSync(docsTestPath) && existsSync(docsModulePath)) {
    const fileContent = await readFileAsync(filePath, 'utf-8')

    let markdownMap = {}
    const ast = parse(fileContent, { sourceType: 'module', plugins: ['typescript'] })

    // 遍历 AST 节点
    const testBlocks = []
    traverse(ast, (node) => {
      if (
        node.type === 'CallExpression' &&
        node.callee.name === 'test' &&
        node.arguments.length === 2 &&
        node.arguments[1].type === 'ArrowFunctionExpression'
      ) {
        const testname = node.arguments[0].value // 获取测试名称
        const [, moduleName, name] = testname.match(/#(.*?)#\s*(.*)/)
        // 移除最外层包裹的 `{ }`，如果存在
        const code = formatTestCode(fileContent, node)
        // 提取 expect(function).toStrictEqual(result) 中的 function 和 result
        const expectDetails = extractExpectDetails(fileContent, node)
        testBlocks.push({ moduleName, name, code, expectDetails })
      }
    })

    // 输出结果
    testBlocks.forEach(({ moduleName, name, code, expectDetails }) => {
      markdownMap[moduleName] = markdownMap[moduleName] || ''

      markdownMap[moduleName] += `### ${name}\n\n`

      const content = []
      content.push(`\`\`\`typescript\n${code}\n`)
      if (expectDetails) {
        content.push(`console.log(${expectDetails.function})\n\n`)
        content.push(`/* output => ${expectDetails.result} */\n`)
      }
      markdownMap[moduleName] += content
        .map((str) => {
          const list = str.split('\n').map((item) => item.replace(/^\s{0,2}/, ''))
          return list.join('\n')
        })
        .join('')
      markdownMap[moduleName] += `\`\`\`\n\n`
    })
    for (const key in markdownMap) {
      if (Object.prototype.hasOwnProperty.call(markdownMap, key)) {
        const outputPath = fileURLToPath(new URL(`../docs/test/${fileName}/${key}.md`, import.meta.url))
        await writeFileAsync(outputPath, markdownMap[key], 'utf8')
      }
    }
  } else {
    if (!existsSync(docsTestPath)) {
      await mkdirAsync(docsTestPath)
    }
    await mkdirAsync(docsModulePath)
    await generateVitestMarkdown(fileName)
  }
}

// 获取文件夹名称
const getFolderNames = (directoryPath) => {
  try {
    // 读取文件夹内容
    const files = readdirSync(directoryPath, { withFileTypes: true })
    // 过滤文件夹并返回文件夹名称
    return files.filter((file) => file.isDirectory()).map((folder) => folder.name)
  } catch (error) {
    console.error('Error reading directory:', error)
    return []
  }
}

// test
const vitestFolderPath = fileURLToPath(new URL('.', import.meta.url))
const vitestFolders = getFolderNames(vitestFolderPath)

vitestFolders.forEach(generateVitestMarkdown)
