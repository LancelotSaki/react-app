### react-app
由于工程使用create-react-app快速开发的方式
需要安装node.js(安装步骤略)
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