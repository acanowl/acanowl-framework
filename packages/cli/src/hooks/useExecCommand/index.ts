import { exec } from 'child_process'

export const useExecCommand = (execStr: string, onlyLog: boolean = true): Promise<string> =>
  new Promise((resolve, reject) => {
    const res = exec(execStr)
    res.stdout?.on('data', (res) => {
      if (onlyLog) {
        console.log(res)
      } else {
        resolve(res)
      }
    })
    res.stderr?.on('data', console.log)
    res.on('close', (code: number) => {
      if (code === 0) return resolve('')
      console.error(`useExecCommand 退出 ${code}`)
      reject()
    })
  })
