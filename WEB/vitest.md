- vite驱动的测试框架，兼容jest
npm install -D vitest 

- mount
npm install --save-dev @vue/test-utils@next

- 无界面浏览器js环境
npm i happy-dom --dev 

- js中引入.vue文件
npm install @vitejs/plugin-vue -D
import vue from '@vitejs/plugin-vue';
plugins: [vue()],

- vite3.0.0
npm install -D vite@^3.0.0

// node 16.4.0
// npm 9.6.7
// npm install -g npm@9.6.7

node 16.17.0
npm 8.15.0
nvm install 16.17.0
nvm use 16.17.0
npm install -g npm@8.15.0
npm install -D @vitest/coverage-c8
npm add --save-dev sass

// 单元测试关闭
import uni from "@dcloudio/vite-plugin-uni";
plugins: [
    uni(),
]

// uni运行关闭
import vue from '@vitejs/plugin-vue';
plugins: [
    vue(),
]

https://jestjs.io/docs/getting-started
https://cn.vitest.dev/guide/
https://test-utils.vuejs.org/guide/
