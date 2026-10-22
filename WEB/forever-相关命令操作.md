- 安装
```
npm install -g forever
```

- 启动一个node
```
forever start app.js
```

- 指定信息输出文件
```
forever start -l forever.log app.js
```

- 指定日志信息和错误日志输出文件
```
forever start -o out.log -e err.log app.js
```

- 追加日志
```
forever start -l forever.log -a app.js
```

- 监听当前文件夹下的所有文件改动
```
forever start -w app.js
```

- 显示所有运行的服务
```
forever list
```

- 停止一个node
```
forever stop app.js
//或者
forever stop [id]
```

- 停止所有运行的node
```
forever stopall
```

- 重启一个node
```
forever restart app.js
```

- 重启所有运行的node
```
forever restartall
```
