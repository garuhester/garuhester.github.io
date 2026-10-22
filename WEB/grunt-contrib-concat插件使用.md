```
module.exports = function(grunt) {

    // 初始化配置
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/all.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/all.css'
            }
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-concat'); //js合并

    // 注册任务
    grunt.registerTask('concat-js', ['concat:js']);//单独执行js合并
    grunt.registerTask('concat-css', ['concat:css']);//单独执行css合并

}

```

**控制台执行**：
- ```grunt concat```：会在当前目录下新建build文件夹，然后分别将当前js文件夹中的所有js文件和当前css文件夹中的所有css文件进行合并，并在build下生成合并后的all.js和all.css

- ```grunt concat-js```：只合并js文件
- ```grunt concat-css```：只合并css文件

