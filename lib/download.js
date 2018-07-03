const download = require('download-git-repo')
const ora = require('ora')
const path = require('path')

module.exports = function (target) {
  target = path.join(target || '.', '.download-temp')

  return new Promise((resolve, reject) => {
    const spinner = ora('正在下载项目模板')
    spinner.start()

    download('github:LuSuguru/clip-init#master', target, { clone: false }, err => {
      if (err) {
        spinner.fail()
        reject(err)
      } else {
        spinner.succeed()
        resolve(target)
      }
    })
  })
}