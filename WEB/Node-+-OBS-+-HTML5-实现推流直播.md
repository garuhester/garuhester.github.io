#Node端：
###1.安装node-media-server
```
npm install node-media-server --save
```
###2.初始化
```
const nodeMediaServer = require("node-media-server")

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        allow_origin: '*'
    }
}

var nms = new nodeMediaServer(config)
nms.run();
```
###3.运行
```
node app.js
```

---

#OBS：
![](https://upload-images.jianshu.io/upload_images/2381669-4b491275c5c73298.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

#HTML5端：
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>直播</title>
</head>

<body>
    <script src="https://cdn.bootcdn.net/ajax/libs/flv.js/1.5.0/flv.min.js"></script>
    <video id="videoElement" width="100%" controls></video>
    <script>
        if (flvjs.isSupported()) {
            var videoElement = document.getElementById('videoElement');
            var flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: 'http://localhost:8000/live/1234.flv'
            });
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            flvPlayer.play();
        }
    </script>
</body>

</html>
```
