# Smart-UI

> A Vue.js Mobile UIKit Project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

安装eslint插件
```
npm i --save-dev prettier eslint-plugin-prettier eslint-config-prettier prettier-eslint-cli
```

# 目录结构

packages  UI组件
examples  示例

# 配置MD插件
vue-markdown-loader。然后我们按照文档配置了相关的插件信息：
```
rules: [
   {
     test: /\.md$/,
     loader: 'vue-markdown-loader'
   }
 ]
```

```
npm install vue-markdown-loader markdown-it-container  -D
```

