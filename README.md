### react-app

#### 前言

本项目里使用了大量的ES6+的语法，之前还在使用原来ES5-的方式来写js代码的童鞋，
请花个一两个钟头去熟悉了解一下--[相关资料](http://es6.ruanyifeng.com/)。
主要常用的有class(类似于java的声明对象)、模板字符串、let、const、Promise()异步调用、module、map遍历以及async/await。
另外本项目中的页面为了减少js页面的复杂度和代码量很多样式都使用了大量的::before和::after元素(由css分担一部分),
不怎么熟悉css的童鞋可以把他们当作额外的div看待(可以略过，直接使用antd前端ui框架开发即可)。
剩下的基本就是react的基础功能了，如:state、常量组件(元素渲染)、函数组件(必须大写开头)、列表、Fragment新标签(替换掉原来外层包裹的div)等等。
了解以上这些基础的东西后，就可以开始快速开发了。

---

由于工程使用create-react-app + css module + css in js + antd + router快速开发,因而需要做一些相关准备。
- 安装node.js(安装步骤略)
- 安装create-react-app插件
```
cnpm install -g create-react-app
```
or
```
npm install -g create-react-app
```
- 进入项目根目录
```
cd react-app
```
- 第一次请先执行
```
cnpm install
```
- 安装两个插件(antd启动准备需要)
```
cnpm install react-app-rewired --dev
```
和
```
cnpm install babel-plugin-import --dev
```
- 启动准备
  由于项目使用官方推荐的create-react-app创建，因而我们没必要执行react-scripts eject把配置文件解包出来
  - 启用css module(默认关闭) 
  ```
  node_modules/_react-scripts@xxxxx@react-scripts/config/
  ```
  找到
  ```
  webpack.config.dev.js  //开发
  webpack.config.prod.js //生产
  ```
  搜索css-loader 在options里加入 
  ```
   modules: true 
  ```
  开发：
  ```
  require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                      modules: true
                  },
                },
  ```
  生产：
  ```
  loader: require.resolve('css-loader'),
                        options: {
                          importLoaders: 1,
                          minimize: true,
                          modules: true
                          sourceMap: shouldUseSourceMap,
                        },
  ```
  - 兼容antd样式
  找到
  ```
    webpack.config.dev.js  //开发
    webpack.config.prod.js //生产
  ```
    中style-loader那片段在test: /\.css$/,后面加入排除判断
  ```
    test: /\.css$/,
    exclude: /node_modules|material-design-lite\.scss/,
  ```
  新增一段跟上面差不多的样式匹配
  ```
  {//antd样式处理
                  test:/\.css$/,
                  include: /node_modules|material-design-lite\.scss/,
                  use:[
                      { loader: "style-loader",},
                      {
                          loader: "css-loader",
                          options:{
                              importLoaders:1
                          }
                      }
                  ]
              },
   ```
- 启动
```
npm run dev
```
- 部署
```
npm run build 
```
插件


插件名称 | 作用 | 地址
--- | --- | ---
reactJs | 该项目核心 | [官方文档](https://reactjs.org/docs/hello-world.html)
antd | 前端UI库 | [学习地址](https://ant.design/docs/react/introduce-cn)
react-router-dom | react路由跳转 | [参考地址](http://reacttraining.cn/web/guides/quick-start)
redux | 组件间的相互通信 | -