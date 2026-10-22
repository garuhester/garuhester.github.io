**页脚置底（Sticky footer）** 就是让网页的footer部分始终在浏览器窗口的底部。

当网页内容足够长以至超出浏览器可视高度时，页脚会随着内容被推到网页底部； 但如果网页内容不够长，置底的页脚就会保持在浏览器窗口底部。

![](http://upload-images.jianshu.io/upload_images/2381669-a7f5be47a4aa06e9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

## 方法一：
>main的margin-bottom属性为负

html：
```
<div class="main">
    <!-- 内容 -->
</div>
<div class="footer"></div>
```
css：
```
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

.main {
    min-height: 100%;
    background: #aaa;
    margin-bottom: -50px;
    padding-bottom: 50px;
}

.footer {
    height: 50px;
    background: #fff;
}
```

## 方法二：
>footer的margin-top属性为负

html：
```
<div class="main">
    <!-- 内容 -->
</div>
<div class="footer"></div>
```
css：
```
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

.main {
    min-height: 100%;
    background: #aaa;
    padding-bottom: 50px;
}

.footer {
    height: 50px;
    background: #fff;
    margin-top:-50px;
}
```

## 方法三：
>flexbox弹性盒布局

html：
```
<div class="main">
    <!-- 内容 -->
</div>
<div class="footer"></div>
```
css：
```
html{
	height: 100%;
}

body{
	margin:0;
	padding:0;
	display: flex;
	flex-direction:column;
	min-height: 100%;
}

.main{
	flex:1;
	background:#aaa;
}

.footer{
	height: 50px;
	background:#fff;
}
```

## 方法四：
>grid网格布局

html：
```
<div class="main">
    <!-- 内容 -->
</div>
<div class="footer"></div>
```
css：
```
html{
	height: 100%;
}

body{
	margin:0;
	padding:0;
	display: grid;
	grid-template-rows: 1fr;
	min-height: 100%;
}

.main{
	background:#aaa;
}

.footer{
	height: 50px;
	background:lightblue;
}
```


