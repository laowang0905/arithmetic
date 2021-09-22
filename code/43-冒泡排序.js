function bubbleSort(array) {
  let tmp
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j-1] > array[j]) {
        tmp = array[j-1]
        array[j-1] = array[j]
        array[j] = tmp
      }
    }   
    console.log(array);
  }
  return array
}
console.log(bubbleSort([1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221]));