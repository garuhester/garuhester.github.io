## 代码
```
var scrollTop = function(){
  var c = document.documentElement.scrollTop || document.body.scrollTop;
  if(c > 0) {
    window.requestAnimationFrame(scrollTop);
    window.scrollTo(0,c - c/5);
  }
}

scrollTop();
```
