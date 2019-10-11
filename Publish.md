## 1. 打包发布说明文档、示例
```
// 运行调试docs文档
npm run dev-docs

// 运行调试demos文档
npm run dev-demos

// 打包输出dist/docs
npm run build-docs

// 打包输出dist/demos
npm run build-demos
```
## 2. 打包发布SmartUI组件库

(1) 打包组件代码
```
// 打包SmartUI组件库
npm run build-publish
```

(2) 在npm官网注册账号，地址：https://www.npmjs.com/，注册好之后：注意邮箱要验证，会发送验证链接到你的注册邮箱，没有验证的话是不能发布代码的
看一下package.json 中 author 尽量与 npm 账户一致

(3) 切换到需要发包的项目根目录下，登录npm账号，输入用户名、密码、邮箱
```
npm login
```
(4) npm publish 执行发布：
```
npm publish
```

