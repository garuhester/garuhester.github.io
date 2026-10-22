## 1. 文件夹（-R表示递归）
chmod -R 777 文件夹

## 2. 文件
chmod 777 test.sh
chmod +x 某文件
如果给所有人添加可执行权限：chmod a+x 文件名；
如果给文件所有者添加可执行权限：chmod u+x 文件名；
如果给所在组添加可执行权限：chmod g+x 文件名；
如果给所在组以外的人添加可执行权限：chmod o+x 文件名；
