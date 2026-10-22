## 效果：

![](http://upload-images.jianshu.io/upload_images/2381669-900a32684f376971.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---
html：
```
<div class="main"></div>
```
## 实现：
1. 方法一：border
```
.main{
  ...
  border-left:5px solid tomato;
}
```

2. 方法二：伪元素（before或after）
```
.main{
  ...
  position:relative;
}
.main::after{
  content:'';
  width:5px;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background:tomato;
}
```

3. 方法三：外部box-shadow
```
.main{
  ...
  box-shadow:-5px 0px 0 0 tomato;
}
```


4. 方法四：内部box-shadow
```
.main{
  ...
  box-shadow:inset 5px 0px 0 0 tomato;
}
```

5. 方法五：drop-shadow
```
.main{
  ...
  filter:drop-shadow(-5px 0 0 tomato);
}
```

6. 方法六：linear-gradient
```
.main{
  ...
  background-image:linear-gradient(90deg, deeppink 0px, deeppink 5px, transparent 0px);
}
```

