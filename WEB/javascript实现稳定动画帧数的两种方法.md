## 方法一：
```
function show(){
  console.log(1);
  requestAnimationFrame(show);
}
show();
```

## 方法二：
```
function show2(){
  setTimeout(function(){
    console.log(2)
    setTimeout(arguments.callee,1000/60);
  },1000/60);
}
show2();
```
