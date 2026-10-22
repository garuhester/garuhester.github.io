### 安装依赖：
```
npm install -g node-gyp

npm install --global --production windows-build-tools

npm install sass-loader@7.3.1 --save-dev

npm install node-sass@4.14.1 --save-dev
```

### webpack.base.conf.js文件：
```
module: {
    rules: [
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        },
    ]
}
```

###vue文件：
```
<style lang='scss'>
</style>
```
