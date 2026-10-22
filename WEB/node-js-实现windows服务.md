# 1. 安装node-windows
```
npm install node-windows --save
```

# 2. 在项目根目录新建三个文件
- index.js
```
var http = require('http');
var obj = {
    id: "123",
    name: "hester"
}
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": 'text/plain', 'charset': 'utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });//可以解决跨域的请求
    res.write(JSON.stringify(obj));
    res.end();
}).listen(8060, function () {
    console.log('http://localhost:8060')
});
```

- nw-install.js (安装服务)
```
let Service = require('node-windows').Service;

let svc = new Service({
    name: 'node_test',    //服务名称
    description: 'node_test', //描述
    script: './index.js' //nodejs项目要启动的文件路径
});

svc.on('install', () => {
    svc.start();
});

svc.install();
```

- nw-uninstall.js (卸载服务)
```
let Service = require('node-windows').Service;

let svc = new Service({
    name: 'node_test',    //服务名称
    description: 'node_test', //描述
    script: './index.js' //nodejs项目要启动的文件路径
});

svc.on('uninstall', function () {
    console.log('Uninstall complete.');
    console.log('The service exists: ', svc.exists);
});

svc.uninstall();
```

# 3. 执行命令
```
node nw-install.js //安装服务
node nw-uninstall.js //卸载服务
```

# 4. 运行效果
![](https://upload-images.jianshu.io/upload_images/2381669-268964d7f4f249bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
