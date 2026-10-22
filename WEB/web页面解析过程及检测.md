(1) 解析HTML结构。 
(2) 加载外部脚本和样式表文件。 
(3) 解析并执行脚本代码。 
(4) 构造HTML DOM模型。//ready执行 
(5) 加载图片等外部文件。 
(6) 页面加载完毕。//load执行

## 代码：
```
//ready执行
document.addEventListener('DOMContentLoaded', function() {
    //...
}, false);

//load执行
window.onload = function() {
    //...
}
```
