```
//获取元素
var box = document.getElementById("box");

//配置选项
var config = { attributes: true, childList: true, subtree: true };

var observer = new MutationObserver(function (mutationsList, observer) {
    for (var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('子元素被修改');
        }
        else if (mutation.type == 'attributes') {
            console.log(mutation.attributeName + '属性被修改');
        }
    }
});

//开始观测
observer.observe(box, config);

//停止观测
// observer.disconnect();

box.className = "active"
box.innerHTML = "哈哈哈"
```
![](https://upload-images.jianshu.io/upload_images/2381669-f35d88f471cc8a6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
