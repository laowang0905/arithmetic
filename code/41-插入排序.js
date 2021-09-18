var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function insertSort(array) {
  let current, pre
  for (let i = 0; i < array.length; i++) {
    current = array[i]
    pre = i - 1
    while (pre >= 0 && array[pre] > current) {
      array[pre + 1] = array[pre]
      pre--
    }
    array[pre+1] = current
  }
  return array
}


console.log(insertSort(a));; // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 45