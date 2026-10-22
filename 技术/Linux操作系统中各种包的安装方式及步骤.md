一、rpm包安装方式步骤：
1、找到相应的软件包，比如`software.rpm`，下载到本机目录
2、进入`software.rpm`所在的目录
3、输入`sudo rpm -ivh software.rpm`

二、deb包安装方式步骤：
1、找到相应的软件包，比如`software.deb`，下载到本机某个目录
2、进入`software.deb`所在的目录
3、输入`sudo dpkg -i soft.version.deb`

三、tar.gz源代码包安装方式：
1、找到相应的软件包，比如`software.tar.gz`，下载到本机某个目录
2、进入`software.tar.gz`所在的目录
3、`sudo tar -xzvf software.tar.gz` //会生成一个software目录
4、`cd software`
5、`./configure`
6、`make`
7、`make install`

四、tar.bz2源代码包安装方式：
1、找到相应的软件包，比如`software.tar.bz2`，下载到本机某个目录
2、进入`software.tar.bz2`所在的目录
3、`tar -xjvf software.tar.bz2` //会生成一个software目录
4、`cd soft`
5、`./configure`
6、`make`
7、`make install`

五、bin文件安装：
如果你下载到的软件名是`software.bin`，一般情况下是个可执行文件，安装方法如下：
1、打开一个终端，sudo su成root用户
2、`chmod +x software.bin`
3、`./software.bin` //运行这个命令就可以安装软件了
