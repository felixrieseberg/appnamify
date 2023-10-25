const filenamify = require('filenamify')

module.exports = {
  appnamify(input) {
    return filenamify(input, { replacement: '-' }).replace(/ /, '-')
  }
}
