# vue

> A Vue.js project

## 从头开始搭建项目步骤

```
# 全局安装脚手架vue-cli
1. npm install -g vue-cli

# 创建一个基于 webpack 模板的新项目
2. vue init webpack '你的项目名称'

# 切换到你的项目名称下
3. cd '你的项目名称'

# 开发环境下运行vue项目
4. npm run dev

# 安装所需要的一些依赖包
5. npm i less less-loader css-loader style-loader  -D
    # 在build/webpack.base.conf.js中添加less依赖:
    {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
    },

# 安装请求需要的包
6. npm i axios babel-polyfill -D
    
    # 在main.js中添加 :
    import axios from 'axios';
    Vue.prototype.$http = axios;
    axios.defaults.baseURL = BASE_URL;

    # 在Vue实例中添加axios:
    new Vue({
      el: '#app',
      router,
      axios,
      components: { App },
      template: '<App/>'
    });

    # 在build/webpack.prod.conf.js中修改babel-polyfill配置
    entry: {
      app: ["babel-polyfill", './src/main.js']
    },

    # 在build/webpack.dev.conf.js中找到webpack.DefinePlugin并添加:
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env'),
       BASE_URL:"'/json'"     // json可以自定义;此处配置的是开发环境url
    })
    
    # 在build/webpack.prod.conf.js中找到webpack.DefinePlugin并添加:
    new webpack.DefinePlugin({
      'process.env': env,
       BASE_URL:"'/'"          //此处配置的是生产环境url
    })
    
    # 在main.js中添加：axios.defaults.baseURL = BASE_URL;

    #在config/index.js中添加代理:
    proxyTable: {
      '/json': {
        target: 'http://local.wanfangdata.com.cn:8084', //目标接口地址
        changeOrigin: true,
        pathRewrite: {
          '^/json': ''
        }
      }
    },

    # 组件中如何调用axios?
    this.$http.get('/usermanager/person/searchPerson');

    以上几个步骤主要是为了解决跨域问题，和解决了来回切换开发和生产环境的问题;
    以及babel-polyfill是为了解决ie浏览器下无法识别promise语法;

#选用自己的组件库，elementUI
7. npm i element-ui animate.css -D
  import 'animate.css';
  import ElementUI from 'element-ui';
  Vue.use(ElementUI);
  参考官方文档:(http://element-cn.eleme.io/#/zh-CN/component/installation)

#修改dist输出目录
8. #在config/index.js中修改build:
    
    //自定义输出index.html的目录
    index: path.resolve(__dirname, '../../web/src/main/webapp/dist/index.html'),  

    //自定义输出css,js,font等目录
    assetsRoot: path.resolve(__dirname, '../../web/src/main/webapp/dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',     //必须添加点

```
总结：相信没有解决不了的问题！