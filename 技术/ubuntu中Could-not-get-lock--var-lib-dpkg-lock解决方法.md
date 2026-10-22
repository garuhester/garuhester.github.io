在Ubuntu中，有时候执行`sudo apt-get install`命令安装软件时，会出现以下的情况

E: Could not get lock /var/lib/dpkg/lock - open (11: Resource temporarily unavailable)
E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?

原因是apt还在运行

## 解决方法：
运行命令
```
$ sudo rm /var/lib/apt/lists/lock
$ sudo rm /var/cache/apt/archives/lock
```
