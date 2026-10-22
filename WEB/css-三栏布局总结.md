以下三栏布局均为**左右固定宽度，中间自适应**

---

## 1.浮动方式（float）
>左右先加载，**中间后加载**
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style type="text/css">
    .left {
        width: 300px;
        height: 500px;
        background: red;
        float: left;
    }

    .right {
        width: 300px;
        height: 500px;
        background: blue;
        float: right;
    }

    .middle {
        height: 500px;
        background: yellow;
        margin: 0 320px 0 320px;
    }
    </style>
</head>

<body>
    <div class="main">
        <div class="left"></div>
        <div class="right"></div>
        <div class="middle"></div>
    </div>
</body>

</html>
```

## 2.绝对定位方式1（absolute）
>左右先加载，**中间后加载**
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style type="text/css">
    .left {
        width: 300px;
        height: 500px;
        background: red;
        position:absolute;
        left: 10px;
    }

    .right {
        width: 300px;
        height: 500px;
        background: blue;
        position:absolute;
        right:10px;
    }

    .middle {
        height: 500px;
        background: yellow;
        margin:0 320px 0 320px;
    }
    </style>
</head>

<body>
    <div class="main">
        <div class="left"></div>
        <div class="right"></div>
        <div class="middle"></div>
    </div>
</body>

</html>
```

## 3.绝对定位方式2（absolute）
>**中间先加载**，左右后加载
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style type="text/css">
    .left {
        width: 300px;
        height: 500px;
        background: red;
        position:absolute;
        top:10px;
        left: 10px;
    }

    .right {
        width: 300px;
        height: 500px;
        background: blue;
        position:absolute;
        top:10px;
        right:10px;
    }

    .middle {
        height: 500px;
        background: yellow;
        margin:0 320px 0 320px;
    }
    </style>
</head>

<body>
    <div class="main">
        <div class="middle"></div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>

</html>
```

## 4.Table方式（table）
>无法设置栏间距
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style type="text/css">
    .main{
    	display: table;
    	width: 100%;
    }
    .left,.right,.middle{
    	display: table-cell;
    }
    .left {
        width: 300px;
        height: 500px;
        background: red;
    }

    .right {
        width: 300px;
        height: 500px;
        background: blue;
    }

    .middle {
        height: 500px;
        background: yellow;
    }
    </style>
</head>

<body>
    <div class="main">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div>
    </div>
</body>

</html>
```

## 5.BFC方式
>左右先加载，**中间后加载**
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style type="text/css">
    .left {
        width: 300px;
        height: 500px;
        background: red;
        float:left;
        margin-right:20px;
    }

    .right {
        width: 300px;
        height: 500px;
        background: blue;
        float:right;
        margin-left:20px;
    }

    .middle {
        height: 500px;
        background: yellow;
        overflow: hidden;
    }
    </style>
</head>

<body>
    <div class="main">
        <div class="left"></div>
        <div class="right"></div>
        <div class="middle"></div>
    </div>
</body>

</html>
```

## 6.Flex方式
>**中间先加载**，左右后加载，未来趋势，需考虑浏览器兼容问题
```
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <style type="text/css">
    .main{
    	display: flex;
    }

    .left {
        height: 500px;
        background: red;
    	order:-1;
    	flex-basis:300px;
    }

    .right {
        height: 500px;
        background: blue;
        flex-basis:300px;
    }

    .middle {
        height: 500px;
        background: yellow;
    	flex:1;
    	margin:0 20px 0 20px;
    }
    </style>
</head>

<body>
    <div class="main">
        <div class="middle"></div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>

</html>
```

