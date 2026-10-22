## 效果：
![](https://upload-images.jianshu.io/upload_images/2381669-3e15d435f14bcdbb.gif?imageMogr2/auto-orient/strip)

## 代码：
html：
```
<ul>
  <li>aaaa</li>
  <li>bbbbbbb</li>
  <li>cccc</li>
  <li>dddd</li>
  <li>eeee</li>
</ul>
```
css：
```
ul {
  padding:0;
  margin:0;
  font-size:0;
}
li {
  font-size:20px;
  padding:5px 15px 5px 15px;
  display: inline-block;
  position:relative;
  cursor: pointer;
  transition: all 0.5s;
}
li::before {
  content:'';
  display:block;
  position:absolute;
  width:0%;
  bottom:0;
  left:100%;
  border-bottom: 2px solid #999;
  transition: all 0.5s;
}
li:hover::before {
  left:0;
  width:100%;
}
li:hover ~ li::before {
  left:0;
}
```

关键部分：
```
li:hover::before {
  left:0;
  width:100%;
}
li:hover ~ li::before {
  left:0;
}
```
