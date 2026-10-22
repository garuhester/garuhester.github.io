在 .electron-vue目录下找到webpack.renderer.config.js文件，修改：
```
let whiteListedModules = ['vue']
-->
let whiteListedModules = ['vue', 'element-ui']
```
