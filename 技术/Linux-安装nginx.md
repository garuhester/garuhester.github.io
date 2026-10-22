## 1. apt-get安装nginx
```
$ sudo apt-get install nginx
```

## 2. 查看nginx是否安装成功
```
$ nginx -v
```

## 3. 启动nginx
```
$ service nginx start
```

## 4. nginx文件安装完成之后的文件位置：
```
/usr/sbin/nginx：主程序
/etc/nginx：存放配置文件
/usr/share/nginx：存放静态文件
/var/log/nginx：存放日志
```

## 5. 卸载apt-get安装的nginx
```
//彻底卸载nginx
$ apt-get --purge autoremove nginx
//查看nginx的版本号
$ nginx -v
```
