1. 在项目目录中执行命令```npm install electron-packager --save-dev```或```cnpm install electron-packager --save-dev```（淘宝镜像）
2. 修改package.json中的"script"
```
"scripts": {
  //正常打包
  "packager": "electron-packager .", 

  //压缩打包
  "packager-asar": "electron-packager . --asar", 

  //所有平台打包
  "packager-all": "electron-packager . --all", 
}
```
3. 在当前目录下执行命令（根据需要执行）
- ```npm run-script packager```：正常打包
- ```npm run-script packager-asar```：压缩打包
- ```npm run-script packager-all```：所有平台打包
