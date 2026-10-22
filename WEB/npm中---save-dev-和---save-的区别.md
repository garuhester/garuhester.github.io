- 简单一句话：--save-dev 是开发时依赖的包，--save 是发布之后还依赖的包

- npm install 在安装依赖包的时候，使用--save-dev和--save都会将包的信息写入package.json中，--save-dev会写入package.json的devDependencies键下，--save会写入package.json的description键下。

- 使用--save-dev：构建工具，测试工具
  使用--save：开发应用中使用的框架，库
