index.html
```
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="expires" content="0" />
```

vue.config.js
```
const timeStamp = new Date().getTime();
module.exports = {
  configureWebpack:{
	output: {
        // 把应用打包成umd库格式
        library: "myLibrary",
        // 输出重构  打包编译后的文件名称  【模块名称.时间戳】
        filename: `[name].${timeStamp}.js`,
        libraryTarget: "umd",
        globalObject: "this",
    },
  }
}
```
