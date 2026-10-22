1. 方法1：提示词安装
```
请安装 DSH 插件 Ebony-Vinyl/dsh-our-free-model。在执行前核对仓库、精确 commit、DSH bundle 清单（dsh.bundle.patch）、生命周期脚本和权限；若插件未通过可安装性验证，请停止并说明原因。执行前确认当前 profile 目录；若目录不在沙箱可写范围，在兼容预检前一次性申请仅覆盖该 profile 的 dsh plugin 命令及目录的主机权限。先执行安装计划中的 pnpm store 兼容预检，再只执行普通安装命令，或 store 不兼容时的两步修复序列；不要先试错，也不要对 add 使用 --force。不要修改 DeepSeek Harness 源码，也不要在 profile 中直接运行 pnpm install/add。完成后运行最小启动验证，并回报成功或失败。
```

2. 方法2：dsh自带插件安装
1）在添加插件中输入github的Ebony-Vinyl/dsh-our-free-model链接
2）dsh plugin --profile web add /绝对路径/dsh-our-free-model
