## 1、解压
```
$ tar zxf node-v8.9.0-linux-x64.tar.gz
```
#### 2、移动到指定目录
```
$ mv node-v8.9.0-linux-x64 /usr/local/node
```
## 3、在/usr/bin 目录下建立软连接 ，变为全局
```
$ cd  /usr/bin
$ ln -s /usr/local/node/bin/node node
$ ln -s /usr/local/node/bin/npm npm
```
## 4、输入命令 node -v，npm -v 检测是否安装成功
```
$ node -v
$ npm -v
```
## 5、安装cnpm
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ cd /usr/bin
$ ln -s /usr/local/node/lib/node_modules/cnpm/bin/cnpm cnpm
```
