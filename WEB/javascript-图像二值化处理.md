## 代码
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <canvas id="canvas" onclick="showInfo()"></canvas>
    <img id="img" src="1.jpg" width="300" height="200" hidden>
    <script>
    window.onload = function() {
        var canvas = document.getElementById('canvas');
        var img = document.getElementById('img');
        var c = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;

        c.drawImage(img, 0, 0, canvas.width, canvas.height);

        this.showInfo = function() {
            var imgData = c.getImageData(0, 0, canvas.width, canvas.height);
            var index = 255/2;//阈值
            for (var i = 0; i < imgData.data.length; i += 4) {
                var R = imgData.data[i]; //R(0-255)
                var G = imgData.data[i + 1]; //G(0-255)
                var B = imgData.data[i + 2]; //B(0-255)
                var Alpha = imgData.data[i + 3]; //Alpha(0-255)
                var sum = (R + G + B) / 3;
                if (sum > index) {
                    imgData.data[i] = 255;
                    imgData.data[i + 1] = 255;
                    imgData.data[i + 2] = 255;
                    imgData.data[i + 3] = Alpha;
                } else {
                    imgData.data[i] = 0;
                    imgData.data[i + 1] = 0;
                    imgData.data[i + 2] = 0;
                    imgData.data[i + 3] = Alpha;
                }
            }
            c.putImageData(imgData, 0, 0);
        }
    }
    </script>
</body>

</html>
```

## 处理前

![处理前](http://upload-images.jianshu.io/upload_images/2381669-73266139bd021beb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 处理后

![处理后](http://upload-images.jianshu.io/upload_images/2381669-739f37e508e0e9ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>记得在服务器端中运行，不然会有跨域问题，推荐使用Node的http-server，使用比较方便
