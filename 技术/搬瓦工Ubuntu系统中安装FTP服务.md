想要在自己的服务器上存放东西，并且能够分享给小伙伴，那我们可以选择FTP服务器，接下来就大家讲一下如何在搬瓦工Ubuntu系统中安装FTP服务
#FTP服务安装及配置步骤:
1. 执行命令 `sudo apt-get update` （**如果已经更新可以跳过该步骤**）
2. 执行命令 `sudo apt-get install vsftpd`
安装vsftpd
3. 执行命令 `nano /etc/vsftpd.conf`
编辑`/etc`目录下的`vsftpd.conf`配置文件
修改一下参数的值（如果该参数前面有注释（#），请去掉注释）
```
anonymous_enable=YES    #设置匿名可登录
local_enable=YES        #本地用户允许登录
write_enable=YES        #用户是否有写的权限
anon_upload_enable=YES   #允许匿名用户上传
anon_mkdir_write_enable=YES   #允许匿名用户创建目录文件
```
>nano编辑器的使用方法请自行查找资料，这里不详细讲解
保存退出步骤:
1.Ctrl+x
2.按y
3.回车

4.编辑好后保存退出
执行命令 `sudo service vsftpd start` 
最后的字符串可以是start/restart/stop(开启/重启/停止)

5.执行命令 `cd /srv/ftp`
进入FTP服务器存放文件的文件夹
你可以在里面存放文件，然后在浏览器域名栏中输入 `ftp://ip` （ip为你搬瓦工服务器的ip）进入FTP文件浏览界面，点击即可下载
![ftp](http://upload-images.jianshu.io/upload_images/2381669-193c23714d652649.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>如果出现登陆FTP服务器时要输入用户名和密码，就重启一下FTP服务器（重启命令 `sudo service vsftpd restart`），有可能是配置文件没有更新

**到此FTP服务器已经安装和配置完成**

大家也可以通过一些第三方工具对FTP服务器进行管理，这里推荐大家使用Xftp
>Xftp下载地址：http://pan.baidu.com/s/1c1PQK6W

**好啦，今天的教程就到这里，欢迎提问、纠错以及分享自己的想法(｡・`ω´･)**
