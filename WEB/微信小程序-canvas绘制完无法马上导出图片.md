如果是下面这样，将无法得到tempFilePath
```
var ctx = wx.createCanvasContext('canvas');
ctx.font = 'normal bold 50px sans-serif';
ctx.fillText('资源', 40, 60);
ctx.draw();

wx.canvasToTempFilePath({
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    destWidth: 200,
    destHeight: 100,
    canvasId: 'canvas',
    success(res) {
        console.log(res.tempFilePath)
    }
});
```

### 有两种方式：
#### 一：
```
var ctx = wx.createCanvasContext('canvas');
ctx.font = 'normal bold 50px sans-serif';
ctx.fillText('资源', 40, 60);
ctx.draw();

setTimeout(function(){
  wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 200,
        height: 100,
        destWidth: 200,
        destHeight: 100,
        canvasId: 'canvas',
        success(res) {
            console.log(res.tempFilePath)
        }
    });
}, 500);
```

#### 二：
```
var ctx = wx.createCanvasContext('canvas');
ctx.font = 'normal bold 50px sans-serif';
ctx.fillText('资源', 40, 60);
ctx.draw(false, function(){
  wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 200,
        height: 100,
        destWidth: 200,
        destHeight: 100,
        canvasId: 'canvas',
        success(res) {
            console.log(res.tempFilePath)
        }
    });
});
```
