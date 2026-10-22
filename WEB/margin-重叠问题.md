## 代码
html：
```
<div class="box">
	<p>hello world</p>
	<p>hello world</p>
	<p>hello world</p>
</div>
```
css：
```
* {
    margin: 0;
    padding: 0;
}

.box p {
    margin-top: 20px;
    margin-bottom: 20px;
    background: skyblue;
}
```
重叠效果：

![](http://upload-images.jianshu.io/upload_images/2381669-10b75e6dc6a1e448.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

## 解决方法
修改html为：
```
<div class="box">
	<p>hello world</p>
    <div style="overflow:hidden">
      <p>hello world</p>
    </div>
	<p>hello world</p>
</div>
```
修正效果：

![](http://upload-images.jianshu.io/upload_images/2381669-1a3d208de34b4a38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

