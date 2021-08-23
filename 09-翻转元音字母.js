/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let front = 0, end = s.length - 1, vowels = 'aeiouAEIOU', tem, a = s.split('')
  while (front < end) {
    if (vowels.indexOf(a[front]) > -1 && vowels.indexOf(a[end]) > -1) {
      tem = a[front]
      a[front] = a[end]
      a[end] = tem
      front++
      end--
    } else if (vowels.indexOf(a[front]) == -1) {
      front++
    } else {
      end--
    }
  }
  return a.join('')
};
console.log(reverseVowels('aA'));
