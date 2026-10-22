## 1. 选择器嵌套

html：
```
<div class="parent">
  <div class="child"></div>
</div>
```
css：
```
.parent{
  width:200px;
  height:200px;
  background:tomato;
  .child{
    width:100px;
    height:100px;
    background:skyblue;
  }
}
```

## 2. 父选择器 &

html：
```
<a href="#">goto</a>

<div class="main-one">one</div>
<div class="main-two">two</div>
```
css：
```
a{
  text-decoration:none;
  &:hover{
    text-decoration:underline;
  }
}

.main{
  &-one{
    color:red;
  }
  &-two{
    color:green;
  }
}

```

## 3. 属性嵌套

html：
```
<div class="main"></div>
```

css：
```
.main{
  width:100px;
  height:100px;
  background:skyblue;

  /* 属性嵌套 */
  margin:{
    left:10px;
    top:10px;
    right:10px;
    bottom:10px;
  }
}
```

## 4. 注释 ```/* */``` 与 ```//```
```/* */```：在编译时**会**写进CSS文件
```//```：在编译时**不会**写进CSS文件

## 5. 插值语句
编译前：
```
$name:"hester";
/* hello,my name id #{$name} */
```
编译后：
```
/* hello,my name id hester */
```

## 6. 变量
- 全局变量：
```
$w:200px;
$h:200px;
.main{
  width:$w;
  height:$h;
}
```
- 局部变量：
```
.main{
  $w:200px;
  $h:200px;
  width:$w;
  height:$h;
}
```
- 局部变量转换为全局变量（添加 ```!global```）：
```
.main{
  $w:200px !global;
  $h:200px !global;
  width:$w;
  height:$h;
}
```

## 7. @mixin 和 @include
html：
```
<div class="main">
  <a href="#">goto</a>
</div>
```
css：
```
@mixin mainstyle($word){
  #{$word}{
    text-decoration:none;
  }
  
  #{$word}:hover{
    text-decoration:underline;
  }
}
@include mainstyle(".main a");
```

## 8. 变量定义 !default：
>如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。

编译前：
```
$content: "First";
$content: "Second" !default;
$new_content: "New" !default;

#main {
  content: $content;
  new-content: $new_content;
}
```
编译后：
```
#main {
  content: "First";
  new-content: "New"; 
}
```


