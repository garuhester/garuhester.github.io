## 原生：
```
var obj = document.getElementById("select"); //定位id
var index = obj.selectedIndex; // 选中索引
var text = obj.options[index].text; // 选中文本
var value = obj.options[index].value; // 选中值
```

## Jquery：
```
$('#select option:selected').text();//选中的文本
$('#select option:selected').val();//选中的值
$("#select").get(0).selectedIndex;//索引
```
