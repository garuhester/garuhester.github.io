```
var startX, startY;
document.addEventListener('touchstart', function(ev) {
	startX = ev.touches[0].pageX;
	startY = ev.touches[0].pageY;
}, false);

document.addEventListener('touchmove', function(ev) {
	var endX, endY;
	endX = ev.changedTouches[0].pageX;
	endY = ev.changedTouches[0].pageY;
	var direction = GetSlideDirection(startX, startY, endX, endY);
	switch (direction) {
		case 0:
			console.log("无操作");
			break;
		case 1:
			// 向上
			console.log("向上");
			break;
		case 2:
			// 向下
			console.log("向下");
			break;
	}
}, false);

function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var result = 0;
    if (dy > 0) { 
        //向上滑动
        result = 1;
    } else if (dy < 0) { 
        //向下滑动
        result = 2;
    } else {
        result = 0;
    }
    return result;
}
```
