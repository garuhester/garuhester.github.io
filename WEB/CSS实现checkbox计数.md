## 效果：
计数前：

![](http://upload-images.jianshu.io/upload_images/2381669-35d6a4000c151097.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

计数后：

![](http://upload-images.jianshu.io/upload_images/2381669-581544e81d6d6d9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 代码：
html：
```
<div class="choose">
  <label><input type="checkbox" />重庆</label>
  <label><input type="checkbox" />北京</label>
  <label><input type="checkbox" />广州</label>
  <label><input type="checkbox" />成都</label>
  <label><input type="checkbox" />云南</label>
  <label><input type="checkbox" />上海</label>
</div>
<div>你选择了<span class="count"></span>个城市</div>
```
css：
```
.choose{
  counter-reset:city;
}
.choose input:checked{
  counter-increment:city;
}
.count::before{
  content:counter(city);
}
```

