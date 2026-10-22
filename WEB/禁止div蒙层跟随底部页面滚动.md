### div蒙层跟随底部页面滚动代码：
html：
```
<div class="content"></div>
<div class="mask"></div>
```
css：
```
#content {
    height: 2000px;
    background: skyblue;
}

#mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .7);
}
```
效果：

![](http://upload-images.jianshu.io/upload_images/2381669-e99ad46c543e70a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

# 禁止div蒙层跟随底部页面滚动
- ### 方法一
>打开蒙层时，给body添加属性
```
body{
  overflow:hidden;
  height:100%;
}
```
- ### 方法二
>将蒙层的position属性改为fixed
```
#mask {
    position: fixed;
}
```

