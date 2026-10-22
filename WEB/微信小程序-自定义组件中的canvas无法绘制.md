在Page页面中，wx.createCanvasContext默认会传第二个参数为this
```
Page({
    onLoad: function (options) {
      var ctx = wx.createCanvasContext('canvas');
    }
})
```

在Component组件中，需要手动传第二个参数
```
Component({
    ready: function () {
      var ctx = wx.createCanvasContext('canvas', this);
    }
});
```
