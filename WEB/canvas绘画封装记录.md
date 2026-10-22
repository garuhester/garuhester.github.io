### 初始化

html：
```
<canvas id="canvas" width="500" height="400"></canvas>
```

javascript：
```
var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');
```

---

1. 画直线
```
/*
* x1：起始横坐标
* y1：起始纵坐标
* x2：结束横坐标
* y2：结束纵坐标
* color：颜色
*/
function drawLine(x1,y1,x2,y2,color){
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}
```
2. 画弧线（实心或空心）
```
/*
* x：弧心横坐标
* y：弧心纵坐标
* r：弧半径
* startAngle：起始角度
* endAngle：结束角度
* dir：方向（默认：false（顺时针），true（逆时针））
* color：颜色
* type：类型（0（空心），1（实心））
*/
function drawArc(x,y,r,sa,ea,dir,color,type){
  ctx.beginPath();
  type == 0 ? ctx.strokeStyle=color : ctx.fillStyle=color;
  ctx.arc(x,y,r,(Math.PI/180)*sa,(Math.PI/180)*ea,dir);
  type == 0 ? ctx.stroke() : ctx.fill();
}
```
3. 画多边形（实心或空心）
```
/*
* arr：多边形顶角坐标
* color：颜色
* type：类型（0（空心），1（实心））
*/
function drawShape(arr,color,type){
  ctx.beginPath();
  type == 0 ? ctx.strokeStyle=color : ctx.fillStyle=color;
  ctx.moveTo(arr[0][0],arr[0][1]);
  for(var i=1;i<arr.length;i++){
    ctx.lineTo(arr[i][0],arr[i][1]);
  }
  type == 0 ? ctx.stroke() : ctx.fill();
}
```
