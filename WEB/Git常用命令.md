```
// 查看本地分支
git branch

// 查看远程分支
git branch -r

// 查看所有分支（本地和远程）
git branch -a

// 切换分支
git checkout [branchName]

// 删除本地分支
git branch -D [branchName]

// 删除远程分支
git push origin --delete [branchName]

// 克隆分支
git clone -b [branchName]

//修改分支的名称
1、执行命令 git checkout [oldBranchName] 切换到[oldBranchName]分支，如果已经在这个分支下，可以不执行此步骤
2、执行命令 git pull origin [oldBranchName] 将代码更新到和远程仓库一致
3、执行命令 git branch -m [oldBranchName] [newBranchName] 将本地仓库的[oldBranchName]的名称修改为[newBranchName]
4、执行命令 git push origin --delete [oldBranchName] 将远程分支[oldBranchName]删除
5、执行命令 git push --set-upstream origin [newBranchName] 将本地分支push到远程仓库

//撤销操作
1、git log
2、git reset <commit_id> //保留修改当前修改代码，回撤到add之前
3、git reset --hard <commit_id>//当前修改代码不保留，回退到某一版本
4、git push origin HEAD --force //强制提交

```
![](https://upload-images.jianshu.io/upload_images/2381669-5c2d6900b4b186fe.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
