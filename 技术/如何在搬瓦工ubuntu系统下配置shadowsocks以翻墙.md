首先进入到搬瓦工VPS的管理界面可以看到一键安装shadowsocks服务只支持Centos，但是如果我们想要安装ubuntu系统，那该怎么安装shadowsocks服务呢？

![Shadowsocks服务](http://upload-images.jianshu.io/upload_images/2381669-cfa6f2aad71a4914.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![一键安装只支持Centos](http://upload-images.jianshu.io/upload_images/2381669-d5bceefd730a8599.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
***
#shadowsocks服务端配置:
1. 首先利用SSH客户端(比如Xshell等)登陆到ubuntu服务端
2. 执行命令 `sudo apt-get update` 
更新命令
3. 执行命令 `sudo apt-get install git`
   安装git
4. 执行命令 `sudo apt-get install nano`
   安装nano（可选择安装，用于编辑json文件）
5. 执行命令 `git clone -b manyuser https://github.com/breakwa11/shadowsocks.git`
从github上获取shadowsocks安装脚本
6. 执行命令 `ll` 查看目录，会发现目录里多了一个叫shadowsocks的文件
7. 执行命令 `cd ~/shadowsocks/`
进入到此目录中
8. 执行命令 `bash initcfg.sh`
初始化配置
9. 执行命令 `mv user-config.json ./shadowsocks/`
把该目录下(~/shadowsocks)的user-config.json
移动到下一个shadowsocks目录中(~/shadowsocks/shadowsocks)
10. 执行命令 `cd shadowsocks/`
进入目录中(~/shadowsocks/shadowsocks)
11. 执行命令 `chmod +x server.py`
给目录下的server.py文件添加权限
12. 执行命令 `nano user-config.json`
用nano编辑器打开json文件(你也可以用其他编辑器打开)
13. 打开过后进行编辑:
```
{
    "server": "0.0.0.0",
    "server_ipv6": "::",
    "server_port": 8388,
    "local_address": "127.0.0.1",
    "local_port": 1080,
    "password": "123456",
    "timeout": 120,
    "udp_timeout": 60,
    "method": "aes-256-cfb",
    "protocol": "auth_sha1_v2_compatible",
    "protocol_param": "",
    "dns_ipv6": false,
    "connect_verbose_info": 0,
    "redirect": "",
    "fast_open": false
}
```
>nano编辑器的使用方法请自行查找资料，这里不详细讲解
去掉某一行:Ctrl+k
保存退出步骤:
1.Ctrl+x
2.按y
3.回车

14. 编辑好后保存退出
然后执行命令
```
python ~/shadowsocks/shadowsocks/server.py -c ~/shadowsocks/shadowsocks/user-config.json -d start
```
最后的字符串可以是start/restart/stop(开启/重启/停止)
 
**到此ubuntu系统中的shadowsocks服务端配置完成，并且已经启动服务**
>如果重启服务器，请再次执行第14步的操作重新开启shadowsocks服务
(可设置开机自启动，这里不做介绍)

***
#shadowsocksR客户端配置:
>shadowsocksR下载地址:
>http://pan.baidu.com/share/link?shareid=4081447275&uk=2134016402

- 解压过后打开 ShadowsocksR-dotnet4.0.exe

![ShadowsocksR](http://upload-images.jianshu.io/upload_images/2381669-56964c6ca7ba9446.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 配置如下：

![配置](http://upload-images.jianshu.io/upload_images/2381669-3ca4dd76b4aeec69.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

服务器IP为ubuntu服务器IP
服务器端口为`user-config.json`中的`server_port`
密码为`user-config.json`中的`password`
加密为`user-config.json`中的`method`
协议为`user-config.json`中的`protocol`
混淆选择`plain`

- 右键任务栏的shadowsockR图标

![rwl.png](http://upload-images.jianshu.io/upload_images/2381669-d5a85007423b377b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 配置参数：
  1. 系统代理模式——PAC模式
  2. PAC——更新PAC为绕过大陆常见域名列表
  3. 代理规则——绕过局域网和大陆

>如果遇到有些网页打不开，请将第二项的PAC选择为更新为PAC为GFWList

***
**开始愉快的翻墙吧(ฅ>ω<*ฅ)**
