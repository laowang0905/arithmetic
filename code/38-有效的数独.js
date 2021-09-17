/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = {}, col = {}, box = {}
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] != ".") {
        let boxNum = parseInt(j / 3) + parseInt(i / 3) * 3, key = board[i][j]
        row[i] = row[i] || {}
        col[j] = col[j] || {}
        box[boxNum] = box[boxNum] || {}
        if (!row[i][key] && !col[j][key] && !box[boxNum][key]) {
          row[i][key] = 1
          col[j][key] = 1
          box[boxNum][key] = 1
        } else {
          return false
        }
      }
    }
  }
  return true
};

console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
