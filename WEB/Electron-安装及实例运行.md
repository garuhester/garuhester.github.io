1. 创建目录 demo
2. 进入目录 demo，运行命令`npm init`
3. 运行命令`npm install electron --save-dev`或者`cnpm install electron --save-dev`（淘宝镜像）
4. 创建文件index.js，写入代码：
```
const {app,BrowserWindow} = require('electron');

var mainWindow;
app.on('ready',function(){
	mainWindow = new BrowserWindow({
		width:700,
		height:630,
		backgroundColor:'#ddd'
	});

	//加载网页
	// mainWindow.loadURL("http://hlz.space/blog");

	//加载当前目录文件
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});
```
5. 修改package.json中的"script"
```
"scripts": {
  "start": "electron ."
}
```
6. 运行命令```npm start```
