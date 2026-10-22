需要的第三方库：
1.jquery.js（https://cdn.bootcss.com/jquery/3.3.1/jquery.js）
2.html2canvas.js（https://github.com/niklasvh/html2canvas）
3.canvas2image.js（https://github.com/hongru/canvas2image）
```
function convert2canvas() {
    
    //保存body标签内的所有内容为图片
    var shareContent = document.body;
    var width = shareContent.offsetWidth;
    var height = shareContent.offsetHeight;
    var canvas = document.createElement("canvas");
    var scale = 2;

    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.getContext("2d").scale(scale, scale);

    var opts = {
        scale: scale,
        canvas: canvas,
        logging: true,
        width: width,
        height: height
    };
    html2canvas(shareContent, opts).then(function(canvas) {
        var context = canvas.getContext('2d');

        var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);

        document.body.appendChild(img);
        $(img).css({
            "width": canvas.width / 2 + "px",
            "height": canvas.height / 2 + "px",
        })
    });
}
```
