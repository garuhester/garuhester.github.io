### 1. 下载nssm：http://nssm.cc/release/nssm-2.23.zip

### 2. 下载之后解压，根据你的系统选择32位和64位的版本，直接在nssm.exe 所在目录运行命令行，输入nssw install +你的服务名，例如：
```
nssm install myservice
```

### 3. 运行命令后，出现下面的窗口：

![](https://upload-images.jianshu.io/upload_images/2381669-cb9375abf5472992.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 4. 填写
`Path`中选择你安装的node.exe
`Startup directory`选择你的node应用的目录
`Argument`输入你的启动文件
例如在以下目录运行app.js （在Startup directory目录执行node app.js ）：

![](https://upload-images.jianshu.io/upload_images/2381669-74808c06637583f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 5. 点击Install service即可安装服务

![](https://upload-images.jianshu.io/upload_images/2381669-b75b0ba729742443.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 6. 输入以下命令即可运行服务
```
nssm start myservice
```

---

>nssm官方文档：http://nssm.cc/usage
基本命令使用：
运行服务：`nssm start <servicename>`
停止服务：`nssm stop <servicename>`
重启服务：`nssm restart <servicename>`






