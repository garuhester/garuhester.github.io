## GET请求
```
url：http://localhost:8080/?name=abc
```

```
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var params = url.parse(req.url, true).query;
    res.end(params.name);
});

server.listen(8080, function() {
    console.log("http://localhost:8080");
});
```
关键部分
```
var params = url.parse(req.url, true).query;//true表示输出json格式
```
---
## POST请求
```
var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"></head>' +
    '<body>' +
    '<form action="/post" method="post">' +
    'name： <input type="text" name="name"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

var server = http.createServer(function(req, res) {
    var body = "";
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        body = querystring.parse(body);//输出json格式
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        if (body.name && req.url === "/post") {
            res.end(body.name);
        } else {
            res.end(postHTML);
        }
    });
});

server.listen(8080, function() {
    console.log("http://localhost:8080");
});
```
