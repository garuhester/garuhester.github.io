## 代码
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <div>
        <label>请选择图片</label>
        <input id="img" type="file" accept="image/*" name="img">
    </div>
    <div id="box"></div>
    <script>
    var img = document.getElementById('img');
    var box = document.getElementById('box');
    img.addEventListener('change', function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            var imgbox = new Image();
            imgbox.width = 300;
            imgbox.height = 300;
            imgbox.src = this.result;
            box.appendChild(imgbox);
        }
    }, false);
    </script>
</body>

</html>
```

## 效果

![](http://upload-images.jianshu.io/upload_images/2381669-1b0564c1d145f027.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/2381669-2a22db5254289133.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

