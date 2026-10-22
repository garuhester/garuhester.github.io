```
var winHeight = $(window).height(); //获取当前页面高度
$(window).resize(function () {
    var thisHeight = $(this).height();
    if (winHeight - thisHeight > 50) {
        //软键盘弹出
    } else {
        //软键盘收起
    }
});
```
