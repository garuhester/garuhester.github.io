## 思路：
直接在html中添加样式覆盖掉之前样式规则

## 代码
```
<!doctype html>
<html>

<head>
  <style>
    .main{
      width:100px;
      height:100px;
      background:#000;
    }
    .main:after{
      content:"hello world";
      background:red;
    }
  </style>
</head>

<body>
  <div class="main" onclick="change()"></div>
  <script>
    var s = document.createElement('style');
    document.body.appendChild(s);
    function change(){
      s.innerText = ".main:after{background:blue}";
    }
  </script>
</body>

</html>
```
关键代码：
```
var s = document.createElement('style');
document.body.appendChild(s);
```
```
s.innerText = ".main:after{background:blue}";
```
