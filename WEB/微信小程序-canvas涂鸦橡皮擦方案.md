- 方案一（globalCompositeOperation = "destination-out"）（安卓失效）：
```
//touchPaintStart
ctx.setStrokeStyle("#000");//设置线的颜色
ctx.setLineCap('round') //设置线两端的样式
ctx.setLineJoin('round');//设置线条转折为圆弧
ctx.setLineWidth(10)//设置线的宽度
ctx.globalCompositeOperation = "destination-out";

//touchPaintMove
ctx.save();
ctx.beginPath()//开始画
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.closePath();
ctx.stroke();
ctx.restore();

x1 = x2;
y1 = y2;//把移动的坐标赋值给开始坐标
ctx.draw(true);
```

- 方案二（clearRect）（安卓效率不佳，擦除过多后，再画线条卡顿）：
```
//touchPaintStart
ctx.setStrokeStyle("#000");//设置线的颜色
ctx.setLineCap('round') //设置线两端的样式
ctx.setLineJoin('round');//设置线条转折为圆弧
ctx.setLineWidth(10)//设置线的宽度

//touchPaintMove
var r = 10;

var asin = r * Math.sin(Math.atan((y2 - y1) / (x2 - x1)));
var acos = r * Math.cos(Math.atan((y2 - y1) / (x2 - x1)))
var x3 = x1 + asin;
var y3 = y1 - acos;
var x4 = x1 - asin;
var y4 = y1 + acos;
var x5 = x2 + asin;
var y5 = y2 - acos;
var x6 = x2 - asin;
var y6 = y2 + acos;

//矩形末端画圆
ctx.save()
ctx.beginPath()
ctx.arc(x2, y2, r, 0, 2 * Math.PI);
ctx.clip()
ctx.clearRect(x2 - r, y2 - r, r * 2, r * 2);
ctx.restore();

//填充两圆之间的矩形
ctx.save()
ctx.beginPath()
ctx.moveTo(x3, y3);
ctx.lineTo(x5, y5);
ctx.lineTo(x6, y6);
ctx.lineTo(x4, y4);
ctx.closePath();
ctx.clip()
ctx.clearRect(0, 0, this.data.paintCanvasSize.width, this.data.paintCanvasSize.height);
ctx.restore();

x1 = x2;
y1 = y2;//把移动的坐标赋值给开始坐标
ctx.draw(true);
```

- 方案三（画背景色线条营造橡皮擦效果）（安卓效率不佳，擦除过多后，再画线条卡顿）：
```
//touchPaintStart
ctx.setStrokeStyle("#F4F4F2");//设置线的颜色
ctx.setLineCap('round') //设置线两端的样式
ctx.setLineJoin('round');//设置线条转折为圆弧
ctx.setLineWidth(10)//设置线的宽度

//touchPaintMove
ctx.save();
ctx.beginPath()//开始画
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.closePath();
ctx.stroke();
ctx.restore();

x1 = x2;
y1 = y2;//把移动的坐标赋值给开始坐标
ctx.draw(true);
```
