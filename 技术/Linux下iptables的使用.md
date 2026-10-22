1. 查看端口转发规则（80）：
```
iptables -t nat -L -n  | grep 80
```

2. 新增端口转发规则（80转发到8080）：
```
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
```

3. 删除端口转发规则（80转发到8080）：
```
iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
```

4. 添加端口到放行规则（8080）：
```
iptables -I INPUT -p tcp --dport 8080 -j ACCEPT
```
