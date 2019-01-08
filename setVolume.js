const { exec } = require('child_process')
const { promisify } = require('util')
const pExec = promisify(exec)

const setVolume = async vol => {
  console.log(vol)
  await pExec(`osascript -e "set Volume ${vol}"`)
  return
}

const test = async () => {
  await setVolume(process.argv[2])
}

test()
