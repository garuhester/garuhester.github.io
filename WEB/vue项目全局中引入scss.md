### 1. 全局引用时需要安装sass-resources-loader
```
npm install sass-resources-loader --save-dev
```

### 2.修改build中的utils.js

将```scss: generateLoaders('sass')```修改为：
```
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
        //你自己的scss全局文件的路径
      resources: path.resolve(__dirname, '../src/style/common.scss')
    }
  }
)
```
