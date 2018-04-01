# 酷狗音乐
> 此项目只是熟悉vue的使用，请勿做它用,后续完善

> 本文章仅仅只是学习研究使用,请勿将以下接口要来其他用途，如有版权问题请告知

## API参考
  [原文地址](https://segmentfault.com/a/1190000010222913)

## 目的

* 熟悉vue中路由搭建，子父级的传参

*  配置config来解决跨域问题

## 起步
  1. 创建vue项目基本框架

  2. 在home中建立路由(index)完成头部导航

## 新歌
  > 创建轮播图

```javascript
在github中搜索：vue-awesome-swiper
   1. npm安装 npm install vue-awesome-swiper --save
   2. 在sper中引入：import { swiper, swiperSlide } from 'vue-awesome-swiper'和
      import 'swiper/dist/css/swiper.css'
   3. 所有的参数同 swiper 官方 api 参数，参考swiper官方参数
```

## 取得后台数据

```javascript
  1. 安装npm install --save axios
  2. 在router中index.js中配置
      * 引入：import Axios from "axios";
      * 配置：Vue.prototype.$axios = Axios
```
## 跨域
1. 在config中的index配置，解决跨域

>  酷狗中的api接口比较多，根据需求配置

```javascript
proxyTable: {
  // 音乐列表
  "/list_api": {
        target: "http://m.kugou.com/",
        changeOrigin: true,
        pathRewrite: {
            '^/list_api': ''
        }
   },
   // 音乐播放
   "/play_api":{
      target:"http://www.kugou.com",
      changeOrigin:true,
      pathRewrite:{
         '^/play_api':''
      }
   },
   // 音乐搜索
   "/search_api":{
      target:"http://mobilecdn.kugou.com",
      changeOrigin:true,
      pathRewrite:{
         '^/search_api':''
      }
   },
},
```

2. 在router中的index中配置
    1. 音乐列表：`Vue.prototype.HOST = "/api";`
    2. 音乐播放：`Vue.prototype.HOSTplay = "/play_api";`
    3. 音乐搜索：`Vue.prototype.HOSTsearch = "/search_api";`

##### 以上操作在操作完成后请重新运行终端命令： `npm run dev`

##### 到此为止基本算是配置完毕，剩下的就是写每个页面的样式，和数据导入

****
此项目只完成十之五六，如果有小伙伴想学习Vue的话希望此项目能帮到你，当然页面比较丑，忽视就好！！哈哈(只供参考 学习，勿做他用)
