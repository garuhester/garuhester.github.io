1. 查看当前php版本
```
$ php -v
```
2. 检查当前PHP的安装包
```
$ yum list installed | grep php
```
3. 移除当前PHP的安装包
```
$ yum remove php*
```
4. 添加第三方的YUM源
```
CentOS 6.5：
$ rpm -Uvh http://mirror.webtatic.com/yum/el6/latest.rpm

CentOS 7.x：
$ rpm -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm
$ rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
```
5. 查看YUM源上能用PHP安装包
```
$ yum list php*
```
6. 安装php7
```
$ yum install php70w 
```
