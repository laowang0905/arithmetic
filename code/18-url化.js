/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
  let res = ""
  for(let i = 0; i<length; i++){
      if(S[i] == " ") {
        res += "20%"
      } else {
        res+= S[i]
      }
  }
  return res
};
// console.log(typeof 's');
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof {name: 12});
// console.log(typeof [1]);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof function () { });

function Foo() { }
console.log(new Foo() instanceof Object);
// console.log('s' instanceof String);
// console.log(2 instanceof Number);
// console.log(true instanceof Boolean);
// console.log({name: 12} instanceof Object);
// console.log([1] instanceof Array);
// console.log(null instanceof null);
// console.log(undefined instanceof undefined);

console.log(replaceSpaces("Mr John Smith    ", 13));