## 代码（内含注释）
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <canvas id="canvas"></canvas>
    <script>
    window.onload = function() {
        var canvas = document.getElementById('canvas');
        var c = canvas.getContext('2d');
        // canvas2image();//canvas转图片
        // image2canvas();//图片转canvas

        //canvas转图片
        function canvas2image() {
            //canvas画一个正方形
            c.fillStyle = "#ddd";
            c.fillRect(0, 0, 100, 100);

            //新建Image对象，将canvas转换为base64添加到image的src属性上
            var img = new Image();
            img.src = canvas.toDataURL('image/jpg');

            //添加到body中
            document.body.appendChild(img);
        }

        //图片转canvas
        function image2canvas() {
            //新建Image对象，引入当前目录下的图片
            var img = new Image();
            img.src = "1.jpg";

            //图片初始化完成后调用
            img.onload = function() {
                //将canvas的宽高设置为图像的宽高
                canvas.width = img.width;
                canvas.height = img.height;

                //canvas画图片
                c.drawImage(img, 0, 0, img.width, img.height);
            }
        }
    }
    </script>
</body>

</html>
```
