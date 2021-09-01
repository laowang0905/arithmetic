/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  return [...new Set(astr.split(''))].length == astr.length
};

console.log(isUnique('abc'));