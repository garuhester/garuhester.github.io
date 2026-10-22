## 效果：
PC：

![](http://upload-images.jianshu.io/upload_images/2381669-4b52362d09d2227b.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Mobile：

![](http://upload-images.jianshu.io/upload_images/2381669-44d2a177bffaff31.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<body class="mdui-drawer-body-left mdui-appbar-with-toolbar mdui-theme-primary-indigo">
    <!-- 头部 -->
    <header class="mdui-appbar mdui-appbar-fixed" id="content-header">
        <div class="mdui-toolbar mdui-color-theme">
            <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-drawer="{target: '#content-drawer', swipe: true}"><i class="mdui-icon material-icons">menu</i></span>
            <a href="" class="mdui-typo-headline mdui-hidden-xs">标题</a>
            <a href="" class="mdui-typo-title">子标题</a>
            <div class="mdui-toolbar-spacer"></div>
            <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
            <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
            <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
        </div>
    </header>

    <!-- 侧边栏 -->
    <div class="mdui-drawer" id="content-drawer">
    	侧边栏
    </div>

    <!-- 内容 -->
    <div class="mdui-container" id="content-main">
    	内容
    </div>

    <!-- 尾部 -->
    <div class="mdui-color-theme" id="content-footer">Copyright</div>
</body>
```

css：
```
.dialog-content {
    padding: 30px;
}
#content-drawer {
    padding: 20px;
    background: skyblue;
    font-size: 50px;
    color:#fff;
}
#content-main {
    padding: 20px;
    width: 100%;
    height: 700px;
    background: tomato;
    font-size: 50px;
    color:#fff;
}

#content-footer {
    padding: 30px;
}
```
