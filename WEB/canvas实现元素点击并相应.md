## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-d439e856bc12c939.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<canvas id="canvas"></canvas>
```

javascript：
```
var canv,
    c,
    eleArr = [];
window.onload = function() {
    canv = document.getElementById('canvas');
    canv.width = 300;
    canv.height = 300;

    c = canv.getContext("2d");
    c.fillStyle = "#ddd";
    c.fillRect(0, 0, 300, 300);

    canv.addEventListener("mousedown", onDown);

    draw();
}

function draw() {
    var skyblue = new Rect({
        x: 30,
        y: 30,
        width: 50,
        height: 50,
        style: "skyblue"
    });
    skyblue.addClick(function() {
        console.log("skyblue");
    });
    var tomato = new Rect({
        x: 100,
        y: 100,
        width: 50,
        height: 50,
        style: "tomato"
    });
    tomato.addClick(function() {
        console.log("tomato");
    });
}

//矩形对象
function Rect({ x, y, width, height, style }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.style = style;

    //添加到事件数组中
    this.add = function() {
        eleArr.push(this);
    }

    //画矩形
    this.draw = function() {
        c.fillStyle = this.style;
        c.fillRect(this.x, this.y, this.width, this.height);
    }

    this.addClick = function(fun) {
        this.add();
        //事件回调函数
        this.clickFun = fun;
    }

    this.draw();
}

//检测是否点击对应元素
function onDown(e) {
    var mx = e.clientX;
    var my = e.clientY;
    for (var i = 0; i < eleArr.length; i++) {
        if (mx > eleArr[i].x && mx < eleArr[i].x + eleArr[i].width && my > eleArr[i].y && my < eleArr[i].y + eleArr[i].height) {
            eleArr[i].clickFun();
        }
    }
}
```
