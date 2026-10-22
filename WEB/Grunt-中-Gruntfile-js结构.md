Gruntfile.js中有三个结构：
1. 初始化配置
2. 加载插件
3. 注册任务
---
以下为代码结构：
```
module.exports = function(grunt){
  //初始化配置
  grunt.initConfig({
    
  });

  //加载插件
  grunt.loadNpmTasks(' ');

  //注册任务
  grunt.registerTask(' ' , function(){

  });
  //或者
  grunt.registerTask(' ' , ['']);
}
```
