## 效果图

![](http://upload-images.jianshu.io/upload_images/2381669-3b22facf6859c385.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码
html：
```
<div class="message1">
	大家好，我是小胡<br>个人主页：hlz.space<br>个人服务网站：www.loveconvert.com
</div>

<div class="message2">
	大家好，我是小胡<br>个人主页：hlz.space<br>个人服务网站：www.loveconvert.com
</div>
```
css：
```
.message1,
.message2 {
    float:left;
    width: 200px;
    height: 80px;
    margin: 50px;
    background-color: skyblue;
    border-bottom-color: skyblue;
    /*为了给after伪元素自动继承*/
    color: #fff;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 12px 5px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
    word-break: break-all;
}

.message1::after {
    content: '';
    position: absolute;
    top: 0;
    right: -24px;
    width: 20px;
    height: 20px;
    border-width: 0 0 20px 20px;
    border-style: solid;
    border-bottom-color: inherit;
    /*自动继承父元素的border-bottom-color*/
    border-left-color: transparent;
    border-radius: 0 0 60px 0;
}

/** 通过对小正方形旋转45度解决 **/
.message2::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -5px;
    width: 10px;
    height: 10px;
    margin-top: -10px;
    background: inherit;
    /*自动继承父元素的背景*/
    transform: rotate(45deg);
}
```
