function refTree(arr, key) {
  let res = []
  let ref = {}
  arr.forEach(item => {
      ref[item.id] = {...item,
          children: []
      }
  })
  Object.keys(ref).forEach(item => {
      if (ref[item].pid == 0) {
          res.push(ref[item])
      } else {
          ref[ref[item].pid].children.push(ref[item])
      }
  })
  return res
}

let arr = [{
  id: 5,
  name: '部门5',
  pid: 4
}, {
  id: 1,
  name: '部门1',
  pid: 0
}, {
  id: 3,
  name: '部门3',
  pid: 1
}, {
  id: 2,
  name: '部门2',
  pid: 1
}, {
  id: 4,
  name: '部门4',
  pid: 3
  }]

  console.log(refTree(arr, 'pid'));
