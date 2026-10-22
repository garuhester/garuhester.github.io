![](https://upload-images.jianshu.io/upload_images/2381669-7858882f1b5a6089.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


问题：
场景添加CanvasLayer后，Sprite的Area2D的input_event事件失效

解决：
CanvasLayer中有全屏的组件，需要修改mouse_filter为ingore
