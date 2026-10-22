### 1. 使用命令：`netstat`
### 2. 命令常见参数：
```
-a (all)显示所有选项，默认不显示LISTEN相关
-t (tcp)仅显示tcp相关选项
-u (udp)仅显示udp相关选项
-n 拒绝显示别名，能显示数字的全部转化成数字。
-l 仅列出有在 Listen (监听) 的服務状态
-p 显示建立相关链接的程序名
-r 显示路由信息，路由表
-e 显示扩展信息，例如uid等
-s 按各个协议进行统计
-c 每隔一个固定时间，执行该netstat命令。
```
>提示：LISTEN和LISTENING的状态只有用-a或者-l才能看到

### 3. 步骤：
  1. 查看端口占用情况：`netstat –tlnp`
![](http://upload-images.jianshu.io/upload_images/2381669-f98a87a3a0203efc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>或者用grep查找对应的被占用的端口，输入`netstat –tlnp | grep 8080`可以看到PID为25303
![](http://upload-images.jianshu.io/upload_images/2381669-a9bbd474788e985e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  
  2. 输入命令`kill 25303`，即可关闭进程
