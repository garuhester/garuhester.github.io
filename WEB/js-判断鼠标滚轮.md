## 代码
```
window.onmousewheel = document.onmousewheel = function(e) {
    e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            console.log("滑轮向上滚动");
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            console.log("滑轮向下滚动");
        }
    } else if (e.detail) { //Firefox滑轮事件  
        if (e.detail > 0) { //当滑轮向上滚动时  
            console.log("滑轮向上滚动");
        }
        if (e.detail < 0) { //当滑轮向下滚动时  
            console.log("滑轮向下滚动");
        }
    }
}
```
