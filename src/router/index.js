import Vue from 'vue';
import Router from 'vue-router';
import Index from "@/components/home/index";
import Gedan from "@/components/home/gedan";
import Geshou from "@/components/home/geshou";
import Paihang from "@/components/home/paihang";
import Xinge from "@/components/home/xinge";
import Play from "@/components/home/paly/play";
import Pai_list from "@/components/home/paihanglist/pai_list";
import Gedan_list from "@/components/home/gedan_list/gedan_list";
import { Input,Button } from 'element-ui';

import Axios from "axios";
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/list_api";
Vue.prototype.HOSTplay = "/play_api";
Vue.prototype.HOSTsearch = "/search_api";

Vue.use(Router)
Vue.use(Input);
Vue.use(Button);

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    if(config.method === "post"){
      config.data = qs.stringify(config.data)
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default new Router({
   linkActiveClass:"active",
  routes: [
     {
        path:"/",
        name:"Index",
        redirect:"/xinge",
        component:Index,
        children:[
           {
             path:"xinge",
             name:"Xinge",
             component:Xinge
          },
          {
            path:"paihang",
            component:Paihang
         },
         {
           path:"gedan",
           component:Gedan
        },
        {
          path:"geshou",
          component:Geshou
        },
        {
           path:"play/:sqhash",
           name:"Play",
           component:Play
        },
        {
          path:"pai_list/:rand_id",
          name:'Pai_list',
          component:Pai_list
        },
        {
          path:"gedan_list",
          component:Gedan_list
        }
       ]
     }
 ]
})
