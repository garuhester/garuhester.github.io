```
var imgData = 'data:image/png;base64,........'
var img = new Image();
img.onload = function(){
 console.log('height',img.height);
 console.log('width',img.width);
};
img.src = imgData; 
```
