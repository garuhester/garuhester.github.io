## 1. 配置文件（/etc/nginx/conf.d/**.conf）
![](https://upload-images.jianshu.io/upload_images/2381669-3c47db70897d2ae0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 为每一个域名建立一个单独的配置文件时输入以下内容：
```
server
{
	listen   80;                            #监听端口设为 80。
	server_name  www.hlz.space;         #绑定您的域名。
	index index.htm index.html index.php;   #指定默认文件。
	root /var/www/html/hlzspace;           #指定网站根目录。
	include location.conf;                  #当您需要调用其他配置文件时才粘贴此项，如无需要，请删除此项。
}
```

- 将多个域名规则写进一个共同的配置文件时输入以下内容：
```
server
{
	listen   80;                            #监听端口设为 80。
	server_name  www.hlz.space;         #绑定您的域名。
	index index.htm index.html index.php;   #指定默认文件。
	root /var/www/html/hlzspace;           #指定网站根目录。
	include location.conf;                  #当您需要调用其他配置文件时才粘贴此项，如无需要，请删除此项。
}
server
{
	listen   80;                            #监听端口设为 80。
	server_name  www.hlz2.space;         #绑定您的域名。
	index index.htm index.html index.php;   #指定默认文件。
	root /var/www/html/hlz2space;           #指定网站根目录。
	include location.conf;                  #当您需要调用其他配置文件时才粘贴此项，如无需要，请删除此项。
}
```

- 为无 WWW 前缀的域名配置规则并加 301 跳转时输入以下内容：
```
server
{
	listen 80;
	server_name hlz.space;
	rewrite ^/(.*) http://www.hlz.space/$1 permanent;
}
```

- 需要为域名添加 404 提示时输入以下内容：
```
server
{
	listen   80;                            #监听端口设为 80。
	server_name  www.hlz.space;         #绑定您的域名。
	index index.htm index.html index.php;   #指定默认文件。
	root /var/www/html/hlzspace;           #指定网站根目录。
	include location.conf;                  #当您需要调用其他配置文件时才粘贴此项，如无需要，请删除此项。
	error_page 404			    #/404.html;
}
```

## 2. 重启nginx
```
$ service nginx  restart
```
