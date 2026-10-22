在`/etc/sysconfig/iptables`文件里面添加
```
-A INPUT -p tcp -m state --state NEW -m tcp --dport 8080 -j ACCEPT
```
>将8080换成你想要放行的端口即可
