import { existsSync, mkdir, readFile, writeFile } from 'fs'
import { promisify } from 'util'
import { fileURLToPath } from 'url'
import type { PlainObject } from '@acanowl/types'

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
const mkdirAsync = promisify(mkdir)

export const useCache = (fileName: string) => {
  const cacheFilePath = fileURLToPath(new URL('../cache', import.meta.url))
  const cacheJsonPath = fileURLToPath(new URL(`../cache/${fileName}.json`, import.meta.url))

  const checkCacheFile = () => existsSync(cacheFilePath)
  const checkCacheJsonFile = () => existsSync(cacheJsonPath)

  const getCache = async (): Promise<PlainObject> => {
    if (!checkCacheFile()) {
      await mkdirAsync(cacheFilePath)
    }
    let cacheJsonString: PlainObject = {}
    if (checkCacheJsonFile()) {
      const cacheJson = await readFileAsync(cacheJsonPath, 'utf8')
      if (cacheJson) {
        try {
          cacheJsonString = JSON.parse(cacheJson)
        } catch (error) {
          console.log('JSON.parse Error；', error)
        }
      }
    } else {
      await writeFileAsync(cacheJsonPath, '{}', 'utf8')
    }
    return cacheJsonString
  }
  const getCacheByKey = async (key: string) => {
    const cacheJson = await getCache()
    return cacheJson[key]
  }
  const setCache = async (params: PlainObject, cover: boolean = false): Promise<PlainObject> => {
    const cacheJson = await getCache()
    Object.assign(cacheJson, params)
    const result = cover ? params : cacheJson
    const willUpdatedContent = JSON.stringify(result, null, 2)
    await writeFileAsync(cacheJsonPath, willUpdatedContent, 'utf8')
    return result
  }
  return { getCache, getCacheByKey, setCache }
}
