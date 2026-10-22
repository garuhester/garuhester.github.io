>运行状态：需要在服务器状态下访问（推荐使用http-server），本地直接运行html无法加载worker.js

html:
```
<button onclick="start()">start</button>
<button onclick="stop()">stop</button>
<script src="./main.js"></script>
```

main.js
```
var w = "";
function start() {
    w.terminate ? w.terminate() : ''
    w = new Worker("./worker.js");
    w.postMessage("hhh")
    w.onmessage = (result) => {
        console.log(result.data);
    }
}

function stop() {
    w.terminate ? w.terminate() : ''
}
```

worker.js:
```
var i = 0;

importScripts("./worker2.js")

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();

onmessage = (e) => {
    console.log(e.data); //hhh
}
// this.onmessage = (e) => {
//     console.log(e);
// }
// addEventListener('message', function (e) {
//     console.log(e);
// }, false);
```

worker2.js
```
console.log("worker2");
```
