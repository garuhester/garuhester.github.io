vue.config.js
```
module.exports = {
    configureWebpack: {
        devServer: {
            watchOptions: {
                ignored: [/node_modules/, /public/, "/src/public/*.vue"],
            },
        },
    },
}
```
