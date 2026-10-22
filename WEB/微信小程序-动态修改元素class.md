由于微信小程序无法获取元素dom进行操作，所以利用属性判断来进行更新：
## 代码：
wxml：
```
<view class="choose {{num==1?'active':''}}" data-num="1" bindtap="itemClick"></view>
<view class="choose {{num==2?'active':''}}" data-num="2" bindtap="itemClick"></view>
<view class="choose {{num==3?'active':''}}" data-num="3" bindtap="itemClick"></view>
<view class="choose {{num==4?'active':''}}" data-num="4" bindtap="itemClick"></view>
<view class="choose {{num==5?'active':''}}" data-num="5" bindtap="itemClick"></view>
```
wxss：
```
.choose {
  ...
}
.choose.active {
  ...
}
```
js：
```
Page({

    data: {
        num: 0
    },

    itemClick: function (e) {
        this.setData({
            num: 0
        })
        this.setData({
            num: e.currentTarget.dataset.num
        })
    }
})
```
