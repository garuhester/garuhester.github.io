## 代码（内含注释）
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <div id="svg-wrap">
        <svg width="200" height="200" xmlns='http://www.w3.org/2000/svg'>
            <rect width="200" height="200" style="fill:#ddd"></rect>
        </svg>
    </div>
    <canvas id="canvas"></canvas>
    <script>
    window.onload = function(){
        //获取svg内容
        var svg = document.getElementById('svg-wrap').innerHTML;

        var canvas = document.getElementById('canvas');
        var c = canvas.getContext('2d');

        //新建Image对象
        var img = new Image();

        //svg内容
        img.src = 'data:image/svg+xml,' + unescape(encodeURIComponent(svg));//svg内容中可以有中文字符
        img.src = 'data:image/svg+xml,' + svg;//svg内容中不能有中文字符

        //svg编码成base64
        img.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg)));//svg内容中可以有中文字符
        img.src = 'data:image/svg+xml;base64,' + window.btoa(svg);//svg内容中不能有中文字符

        //图片初始化完成后调用
        img.onload = function() {
            //将canvas的宽高设置为图像的宽高
            canvas.width = img.width;
            canvas.height = img.height;
            
            //canvas画图片
            c.drawImage(img, 0, 0);

            //将图片添加到body中
            document.body.appendChild(img)
        }
    }
    </script>
</body>

</html>
```

## 效果图

![](http://upload-images.jianshu.io/upload_images/2381669-5e1fe4184f2468fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


>svg标签一定要加属性`xmlns='http://www.w3.org/2000/svg'`
svg标签一定要加属性`xmlns='http://www.w3.org/2000/svg'`
svg标签一定要加属性`xmlns='http://www.w3.org/2000/svg'`
不然svg内容和base64添加到`img.src`会出错，canvas和image都不会在页面显示出来
