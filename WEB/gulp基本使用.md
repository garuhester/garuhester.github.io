## gulpfile.js代码
```
var gulp = require('gulp'),
    del = require('del'), //删除文件
    concat = require('gulp-concat'), //合并文件
    uglyfly = require('gulp-uglyfly'), //js压缩
    wrap = require('gulp-wrap'), //定义公共头部和底部
    autoprefixer = require('gulp-autoprefixer') //css属性加上浏览器的前缀

gulp.task('clean', function() {
    return del(['dist/*']);
});

gulp.task('script', ['clean'], function() {
    gulp.src('js/*.js')
        .pipe(concat('a.js'))
        .pipe(uglyfly())
        .pipe(wrap({ src: 'src/header.js' }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', ['clean', 'script'], function() {
    gulp.src('css/*.css')
        .pipe(concat('a.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean', 'script', 'css']);
```
