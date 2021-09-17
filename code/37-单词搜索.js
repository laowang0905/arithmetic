// var findWords = function (board, words) {
//   //n board的高度 m board的宽度
//   const n = board.length, m = board[0].length; 
//   // 算出字典树最大深度
//   const maxLen = words.reduce((max, w) => Math.max(max, w.length), 0);
//   const trie = new Trie(board, n, m);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       // OPT 可以判断下开头字符是否在words里，在才调用insert
//       trie.insert(i, j, maxLen);
//     }
//   }
//   console.log(trie);
//   return words.filter(w => trie.find(w));
// };

// class Trie {
//   constructor(board, n, m) {
//     this.root = {};
//     this.n = n;
//     this.m = m;
//     this.board = board;
//     this.set = new Array(n * m).fill(false);
//   }
//   insert(i, j, dep, node = this.root) {
//     // 剩余深度为0
//     if (dep === 0) return;
//     // 不在board范围内
//     if (i < 0 || j < 0 || i >= this.n || j >= this.m) return;
//     const idx = i * this.m + j, c = this.board[i][j]; //ids 第i行第j个  c 第i行第j个元的元素值

//     if (this.set[idx]) return;
//     this.set[idx] = true;
//     node = node[c] = (node[c] || {});
//     this.insert(i + 1, j, dep - 1, node);
//     this.insert(i - 1, j, dep - 1, node);
//     this.insert(i, j + 1, dep - 1, node);
//     this.insert(i, j - 1, dep - 1, node);
//     this.set[idx] = false;
//   }
//   find(w) {
//     let node = this.root;
//     for (const c of w) {
//       if (!node[c]) return false;
//       node = node[c];
//     }
//     return true;
//   }
// }

// console.log(findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"])
// );

class Trie {
  constructor(m, n, board) {
    this.root = {}
    this.m = m
    this.n = n
    this.board = board
    this.setMap = new Array(m * n).fill(false)
  }
  insert(i, j, depth, node = this.root) {
    if (depth === 0 || i < 0 || j < 0 || i >= this.n || j >= this.m) return
    const idx = i * this.m + j, key = this.board[i][j]
    if (this.setMap[idx]) return
    this.setMap[idx] = true
    node[key] = (node[key] || {})
    this.insert(i + 1, j, depth - 1, node[key])
    this.insert(i - 1, j, depth - 1, node[key])
    this.insert(i, j + 1, depth - 1, node[key])
    this.insert(i, j - 1, depth - 1, node[key])
    this.setMap[idx] = false
  }
  search(word) {
    let node = this.root
    for (let i of word) {
      if (!node[i]) return false
      node = node[i]
    }
    return true
  }
}

function findWords(board, words) {
  let w = board[0].length, h = board.length
  let depth = words.reduce((max, word) => Math.max(max, word.length), 0)
  const trie = new Trie(w, h, board)
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      trie.insert(i, j, depth)
    }
  }
  console.log(trie);
  return words.filter(w => trie.search(w));
}
// findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
// ["oath","pea","eat","rain"])
findWords([["a", "a"]], ["aa"])