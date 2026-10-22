## 实现效果

宽度 > 640px：

![](http://upload-images.jianshu.io/upload_images/2381669-d66d515c95487682.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

宽度 < 640px：

![](http://upload-images.jianshu.io/upload_images/2381669-24fad474baffa14b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码
html：
```
<div class="main">
	<div class="header"></div>
	<div class="menu"></div>
	<div class="content"></div>
	<div class="footer"></div>
</div>
```
css：
```
.main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 5px;
    grid-template-areas: 
      "h h h h h h h h h h h h" 
      "c c c c c c c c m m m m"
      "f f f f f f f f f f f f";
    margin: 0 auto;
}

.header {
    height: 50px;
    grid-area: h;
    background: #BBF2BB;
}

.menu {
    height: 200px;
    grid-area: m;
    background: #FCE885;
    padding: 10px;
    box-sizing: border-box;
}

.content {
    height: 200px;
    grid-area: c;
    background: #8AFDFA;
}

.footer {
    height: 50px;
    grid-area: f;
    background: #DFB8F7;
}

@media screen and (max-width:640px) {
    .main {
        grid-template-areas: 
          "h h h h h h h h h h h h"
          "m m m m m m m m m m m m"
          "c c c c c c c c c c c c" 
          "f f f f f f f f f f f f";
    }
    .menu {
        height: 50px;
    }
}
```

响应式布局主要部分：
```
.main {
    ...
    grid-template-areas: 
      "h h h h h h h h h h h h" 
      "c c c c c c c c m m m m"
      "f f f f f f f f f f f f";
}
```
```
@media screen and (max-width:640px) {
    .main {
        grid-template-areas: 
          "h h h h h h h h h h h h"
          "m m m m m m m m m m m m"
          "c c c c c c c c c c c c" 
          "f f f f f f f f f f f f";
    }
}
```
