## 方法一（URL拼接方式）：
```
var a = document.createElement("a");
a.download = "content.txt";
a.href = "data:text/txt;charset=utf-8," + content;
a.textContent = "download";
a.click();
```

## 方法二（Blob转URL方式）：
```
var a = document.createElement("a");
a.download = "content.txt";
var blob = new Blob(["hello world"], {type: "text/txt"});
var content = URL.createObjectURL(blob);
a.href = content;
a.textContent = "download";
a.click();
```
