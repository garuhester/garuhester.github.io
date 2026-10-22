代码实现：
```
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var app = express();

app.use(cookieParser('sessiontest'));
app.use(session({
    secret: 'sessiontest',
    resave: true,
    saveUninitalized: true,
    store: new MongoStore({
        url: 'mongodb://localhost:27017/sessionmongo'
    })
}));
app.get('/login', function(req, res) {
    var user = {
        name: "hester",
        age: "21"
    };
    req.session.user = user;
    res.redirect('/user');
});
app.listen(8080, function() {
    console.log("http://localhost:8080");
});
```
---
引用模块：
```
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
```
基本使用：
```
app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost:27017/sessionmongo'
    })
}));
```
在页面创建session：
```
var user = {
  name: "hester",
  age: "21"
};
req.session.user = user;
```

>更多详细使用：https://github.com/jdesboeufs/connect-mongo
