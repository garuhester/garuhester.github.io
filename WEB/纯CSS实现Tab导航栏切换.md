## 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-195d96d535ddd109.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-836018c5bfdc22ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<div class="main">
	<div id="content1">列表一内容</div>
	<div id="content2">列表二内容</div>
    <ul class="tab">
        <li><a href="#content1">列表一</a></li>
        <li><a href="#content2">列表二</a></li>
    </ul>
</div>
```
css：
```
.main{
	position: absolute;
	left: 50%;
	top:30%;
	transform: translate(-50%,-50%);
}
.tab {
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
}

.tab li {
    float: left;
}

.tab li a {
    text-decoration: none;
    color: #000;
    background: #ddd;
    display: inline-block;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
}

#content1,
#content2 {
    display: none;
    width:240px;
    height:100px;
    border:1px solid #ddd;
    position: absolute;
    top:40px;
    padding:10px;
    box-sizing: border-box;
}

#content1:target,
#content2:target {
    display: block;
}
#content1:target ~ .tab li:nth-child(1) a{
	background:skyblue;
	color:#fff;
}
#content2:target ~ .tab li:nth-child(2) a{
	background:skyblue;
	color:#fff;
}
```
css关键部分：
```
#content1,
#content2 {
    display: none;
}
#content1:target,
#content2:target {
    display: block;
}
#content1:target ~ .tab li:nth-child(1) a{
	background:skyblue;
	color:#fff;
}
#content2:target ~ .tab li:nth-child(2) a{
	background:skyblue;
	color:#fff;
}
```
