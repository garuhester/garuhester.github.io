## 1、解压
```
$ tar -zxvf mongodb-linux-x86_64-3.2.12.tgz
```
## 2、移动到指定目录
```
$ mv -r mongodb-linux-x86_64-3.2.12 /usr/local/mongodb
```
## 3、配置系统文件profile
```
$ sudo vi /etc/profile
  //写入
  export MONGODB_HOME=/usr/local/mongodb  
  export PATH=$PATH:$MONGODB_HOME/bin

$ source /etc/profile    //重启系统配置
```
## 4、创建用于存放数据和日志文件的文件夹，并修改其权限增加读写权限
```
$ cd /usr/local/mongodb
$ sudo mkdir -p data/db
$ sudo chmod -r 777 data/db
$ sudo mkdir logs
$ cd logs
$ touch mongodb.log
```
## 5、mongodb启动配置
```
$ cd /usr/local/mongodb/bin  
$ sudo vi mongodb.conf
  //写入
  dbpath = /usr/local/mongodb/data/db #数据文件存放目录  
  logpath = /usr/local/mongodb/logs/mongodb.log #日志文件存放目录  
  port = 27017  #端口  
  fork = true  #以守护程序的方式启用，即在后台运行  
  nohttpinterface = true 
```
## 6、启动mongod数据库服务，以配置文件的方式启动
```
$ cd /usr/local/mongodb/bin
$ ./mongod -f mongodb.conf
```
