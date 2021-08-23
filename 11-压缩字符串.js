/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let i = 0, j = 0
    while (i <= chars.length && j <= chars.length) {
        if (chars[i] == chars[j]) {
            j++
        } else {
            let count = j - i + ""
            if (count > 1) {
                chars.splice(i + 1, j - i - 1, ...count.split(""))
                j = count.split("").length  + i + 1
            }
            i = j
        }
    }
    return chars.length
};
console.log(compress(["a", "a", "a", "b", "b", "a", "a"]));
console.log(compress(["a","a","b","b","c","c","c"]));
