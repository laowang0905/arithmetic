/**
 * @description 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，
 * 且左右两端对齐的文本。你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时
 * 可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。要求尽可能均匀分配单词间的空格数量。如果某一行单词
 * 间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。文本的最后一行应为左对齐，且单词之间不插入额外
 * 的空格。
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = []
  let row = 0
  for (let i = 0; i < words.length; i++) {
    let len = 0
    while (len <= maxWidth) {
      if (res[row]) {
        res[row].push(words[i])
        len += words[i].length + 1
      } else {
        res[row] = []
        res[row].push(words[i])
        len += words[i].length
      }
      if (i + 1 < words.length && len + words[i + 1].length + 1 <= maxWidth) {
        i++
      } else {
        if (res[row].length == 1) {//当前航只有一个单词
          res[row] = res[row][0]+ new Array(maxWidth - res[row][0].length).fill(' ').join("")
        } else if(i+1<words.length){
          let len = 0, space = 0
          res[row].forEach(item => {
            len += item.length
          })
          space = maxWidth - len
          let avg = Math.floor(space / (res[row].length - 1))
          let ext = space % (res[row].length - 1)
          const s1 = res[row].slice(0, ext+1).join(new Array(avg + 1).fill(' ').join(''))
          const s2 = res[row].slice(ext+1).join(new Array(avg).fill(' ').join(''))
          res[row] = s1+new Array(avg).fill(' ').join('')+s2
        } else {
          let len = res[row].join(' ')
          res[row] = len+new Array(maxWidth-len.length).fill(' ').join('')
        }
        break
      }
    }
    row++
  }
  res[res.length-1]
  return res
};
fullJustify(["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"], 20)