console.log(module.exports === this)
console.log(module.exports === exports)

console.log(typeof module.exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)