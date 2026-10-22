1. 执行命令`sudo apt-get install python3`
2. 备份原有的python链接
```
$ sudo cp /usr/bin/python /usr/bin/python_bak
```
3. 删除原有的python链接
```
$ sudo rm /usr/bin/python
```
4. 重新指定新的python链接
```
$ sudo ln -s /usr/bin/python3.5 /usr/bin/python
```

更新完成！！
