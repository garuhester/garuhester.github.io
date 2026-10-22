如果数组是一般的数组，例如：
```
var arr = [1,1,2,2,3,3];
```
针对以上数组的去重实现：
```
var arr = [1,1,2,2,3,3];

var newArr = [...new Set(arr)];
//或
var newArr = [Array.from(new Set(arr))];
```

---

但是如果数组是由对象元素组成的：
```
var arr = [
  {
      id: 1,
      name: '张三'
  },
  {
      id: 1,
      name: '张三'
  },
  {
      id: 2,
      name: '李四'
  }
];
```

这个时候利用刚刚的方法就不能进行去重了，这类算法实现的方法很多，下面给出一种自己发明方法：
>步骤：
1.创建一个新数组newArr
2.遍历原数组arr
3.判断新数组中是否有，如果没有则添加，反之则不添加
（判断新数组没有的对应元素的方法使用了Array.filter方法）
```
var newArr = [];
for(let i=0;i<arr.length;i++){
  //如果新数组中没有，则添加
  if(notHas(newArr,arr[i].id)){
    newArr.push(arr[i]);
  }
}

//新数组中是否已经有还有对应id的元素，如果没有返回true，反之返回false
var notHas = (arr,id) =>{
  var narr = arr.filter((item) =>{
    return item.id == id;
  });
  return narr.length == 0 ? true : false;
};
```
