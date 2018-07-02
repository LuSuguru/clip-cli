const download = require('download-git-repo')
const path = require('path')

module.exports = function (target) {
  target = path.join(target || '.')
  return new Promise((resolve, reject) => {
    download('github:LuSuguru/clip-init#master', target, { clone: false }, err => {
      if (err) {
        reject(err)
      } else {
        resolve(target)
      }
    })
  })
}