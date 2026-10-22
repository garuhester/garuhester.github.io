今天给大家介绍如何在ubuntu系统安装与卸载sublime text编辑器
#sublime text 3安装及配置步骤：
- **安装方式一：通过软件库安装**
  1. 首先打开终端
执行命令 `sudo add-apt-repository ppa:webupd8team/sublime-text-3`
添加sublime text 3的仓库
>中间如要需要等待的时候直接按enter就好（建立信任数据库）
  2. 执行命令 `sudo apt-get update`
更新软件库
  3. 执行命令 `sudo apt-get install sublime-text-installer`
安装sublime text 3

  到此通过方式一已经将sublime text 3安装完成 
- **安装方式二：通过安装Debian包裹文件（手动下载的文件，后缀名为`.deb`）**
>`sublime-text_build-3126_amd64.deb`下载地址：http://pan.baidu.com/s/1dFOd23B

  1. 下载好文件过后，打开终端并进入该文件所在目录（比如`~/Downloads`）
  2. 执行命令 `sudo dpkg -i sublime-text_build-3126_amd64.deb`

  到此通过方式二已经将sublime text 3安装完成
***
#卸载sublime text 3
1. 首先查看一下sublime text 3在系统中存在的程序名
执行命令 `dpkg -l | grep sublime`
2. 查看到程序名后
执行命令 `sudo dpkg -r sublime-text`
卸载sublime text
>最后的名字取决查看的程序名
方式一安装程序名为：`sublime-text-installer`
方式二安装程序名为：`sublime-text`
3. 执行命令 `sudo rm -rf /home/username/.config/sublime-text-3/`
删除配置文件，其中的`username`为系统的用户名
4. 执行命令 `sudo find / -name sublime*`
查看系统中与sublime text 3相关的文件，然后再根据路径依次删除即可完全卸载掉sublime text 3
***
>sublime text 2安装命令稍微不同（对应安装方式一的三条命令）：
1. sudo add-apt-repository ppa:webupd8team/sublime-text-2   
2. sudo apt-get update  
3. sudo apt-get install sublime-text-dev 

**好啦，今天的教程就到这里，拜拜咯~~~**
