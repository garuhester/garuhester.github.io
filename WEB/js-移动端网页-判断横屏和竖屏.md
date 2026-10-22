```
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
    if (window.orientation === 180 || window.orientation === 0) {
        //竖屏
    }
    if (window.orientation === 90 || window.orientation === -90) {
        //横屏
    }
}, false);
```
