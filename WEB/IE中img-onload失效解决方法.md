将img.src放置img.onload之后

改写法在IE8及以下失效：
```
var imgData = 'data:image/png;base64,........'
var img = new Image();
img.src = imgData; 
img.onload = function(){
 console.log('height',img.height);
 console.log('width',img.width);
};
```

改为：
```
var imgData = 'data:image/png;base64,........'
var img = new Image();
img.onload = function(){
 console.log('height',img.height);
 console.log('width',img.width);
};
img.src = imgData; 
```
