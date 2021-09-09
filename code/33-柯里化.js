const _ = require("../lib/lodash.min.js")

function add(a, b, c) {
  return [a, b, c]
}

const curried = _.curry(add)

console.log(curried(1)(2)(3,4));