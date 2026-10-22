1. 获得select选中的option的值：
```
var sel= document.getElementById('select');
var index = sel.selectedIndex; //序号，取当前选中选项的序号
var val = sel.options[index].value;
```

2. 获得select选中的option的文本：
```
var sel = document.getElementById('mySelect');
var index = sel.selectedIndex; //序号，取当前选中选项的序号
var val = sel.options[index].text;
```
