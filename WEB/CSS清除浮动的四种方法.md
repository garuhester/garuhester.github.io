### 1. ::after
html：
```
<div class="clearfix">
  <div class="title">title</div>
</div>
<div class="content">content</div>  
```
css：
```
.title{
  float:left;
}
.clearfix::after{
  content:'';
  display:block;
  clear:both;
}
```

### 2. overflow:hidden
html：
```
<div class="clearfix">
  <div class="title">title</div>
</div>
<div class="content">content</div>  
```
css：
```
.title{
  float:left;
}
.clearfix::after{
  overflow:hidden;
}
```

### 3. clear:both（一）
html：
```
<div>
  <div class="title">title</div>
  <div class="clearfix"></div>
</div>
<div class="content">content</div>  
```
css：
```
.title{
  float:left;
}
.clearfix{
  clear:both;
}
```

### 4. clear:both（二）
html：
```
<div>
  <div class="title">title</div>
</div>
<div class="content">content</div>  
```
css：
```
.title{
  float:left;
}
.content{
  clear:both;
}
```
