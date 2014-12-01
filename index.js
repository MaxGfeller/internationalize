var through = require('through2')

module.exports = function(file) {
  return through(function(buf, enc, next) {
    next()
  })
}
