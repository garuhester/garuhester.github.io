- 获取input光标位置：
```
var input = document.getElementById("input")
var cursurPosition = -1;
if (typeof input.selectionStart == "number") {//非IE浏览器
    cursurPosition = input.selectionStart;
} else {//IE
    var range = document.selection.createRange();
    range.moveStart("character", -input.value.length);
    cursurPosition = range.text.length;
}
```

- 聚焦input：
```
var input = document.getElementById("input")
input.focus();
```

- 选择input中的内容
```
var input = document.getElementById("input")
input.focus();
input.setSelectionRange(2, 3);
```
