1. 安装node-cmd：`npm install node-cmd`

2. app.js：
```
var cmd = require("node-cmd");

//运行笔记本
cmd.run("notepad");

//运行笔记本
cmd.get("notepad",function(err,data){
	console.log(data);
});

//ping命令并返回值
cmd.get("ping 127.0.0.1",function(err,data){
	console.log(data);
});
```
