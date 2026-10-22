要在页面ejs模板中使用函数的方法（以moment.js为例）

---

## 要实现下面这个在ejs模板中格式化时间
```
<div class="time">
   <%= dateFormat(time) %>
</div>
```

## 实现
```
var express = require('express');
var moment = require('moment');
var app = express();
app.locals.dateFormat = function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
app.get('/', function(req, res) {
	res.render('index');
});
app.listen(8080);
```
#### 关键语句
```
app.locals.dateFormat = function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
```
