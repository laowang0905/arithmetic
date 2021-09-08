function clone(obj) {
  let tem
  if (obj instanceof Array) {
    tem = []
    let i = 0
    while (i < obj.length) {
      tem[i] = clone(obj[i])
      i++
    }
  } else if (obj instanceof Object) {
    tem = {}
    for (let i in obj) {
      tem[i] = clone(obj[i])
    }
  } else {
    return obj
  }
  return tem
}

// console.log(clone([1, 2, 3, {name: 12, age: 12}]));    
var foo = 1;
  (function foo() {
    foo = 10
    console.log(foo);
  }())
console.log(foo);