## 代码
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style>
        div{
            width: 100px;
            height: 100px;
            background: #ddd;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <div id="a" draggable="true">a</div>
    <div id="b" draggable="true">b</div>
    <script>
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    a.ondragstart = function(e) {
        e.dataTransfer.setData("id", e.target.id);
    }
    b.ondragover = function(e) {
        e.preventDefault();
    }
    b.ondrop = function(e) {
        var id = e.dataTransfer.getData("id");
        console.log(id);
    }
    </script>
</body>

</html>
```

---

## 设置元素可拖放：
```
draggable="true"
```

##触发事件：

**1.拖动目标时触发事件：**
- ondragstart：开始拖动元素时触发
- ondrag：元素正在拖动时触发
- ondragend：完成元素拖动后触发

**2.释放目标时触发事件：**
- ondragenter：当被拖动的对象进入容器范围内时触发
- ondragover：当被拖动的对象在另一对象容器范围内拖动时触发
- ondragleave：当被拖动的对象离开容器范围内时触发
- ondrop：在一个拖动过程中，释放鼠标键时触发此事件

## 数据操作：
- **设置**数据：```e.dataTransfer.setData(key, value);``` （在ondragstart中操作）
- **获取**数据：```e.dataTransfer.getData(key);``` （在```ondragover```中阻止对元素的默认处理方式，通过调用```ondragover```事件的 ```e.preventDefault()```方法，然后在ondrop中操作）
- **清除**数据：清除全部数据```e.dataTransfer.clearData()```或清除指定数据```e.dataTransfer.clearData(["id"])```

**实例：**
```
b.ondragover = function(e) {
    e.preventDefault();
}
b.ondrop = function(e) {
    var id = e.dataTransfer.getData("id");
    console.log(id);
}
```
## 设置拖放操作的自定义图标：
```e.dataTransfer.setDragImage(img,x,y);```

**实例：**
```e.dataTransfer.setDragImage(document.getElementById('img'),0,0);```
