function selectSort(array) {
  let idx, tmp, min
  for (let i = 0; i < array.length; i++) {
    min = array[i], idx = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j]
        idx = j
      }
    }
    tmp = array[i]
    array[i] = min
    array[idx] = tmp
  }
  return array
}

console.log(selectSort([1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221]))