mac使用串口SDK serialport，在打包后运行在windows上出现报错：
```
electron Error: node_modules\@serialport\bindings-cpp\build\Release\bindings.node is not a valid Win32 application.
```

解决办法：

1. package.json
```
"build":{
    "npmRebuild": false
}
```

2. 删除node_modules/@serialport/bindings-cpp/build/Release下的bindings.node
