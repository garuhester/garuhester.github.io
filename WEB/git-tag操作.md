查看本地tag
```
git tag -l
```

查看远程tag
```
git ls-remote --tags origin
```

新建本地tag
```
git tag -a '版本号' -m '备注xxxx'
```

推送本地tag到远程tag
```
git push origin '版本号'
```

推送本地所有tag到远程
```
git tag origin --tags
```

删除本地tag
```
git tag -d '版本号'
```

删除本地所有tag
```
git tag -l | xargs git tag -d
```

删除远程tag
```
git push origin :refs/tags/版本号
```

删除远程所有tag
```
git show-ref --tag | awk '{print ":" $2}' | xargs git push origin
```
