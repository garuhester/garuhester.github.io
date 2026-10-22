## 效果：
![](http://upload-images.jianshu.io/upload_images/2381669-3fc2be91283270b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<iframe id="ifr"></iframe>
```
javascript：
```
var content = "<p>hello</p>"

var iframe = document.getElementById('ifr');
var doc = document.all ?
 iframe.contentWindow.document : iframe.contentDocument;
doc.open();
doc.write(content);
doc.close();
```
