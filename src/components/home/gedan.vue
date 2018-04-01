<template lang="html">
  <div class="gedan">
     <ul>
       <router-link tag="li" to="/gedan_list" v-for="(item,index) in info" :key="index">
         <img :src="item.imgurl.replace(/\{\w*\}\//g,'')" alt=""><span>{{ item.specialname }}</span>
       </router-link>
     </ul>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
   name:"gedan",
   data(){
     return{
       info:[]
     }
   },
   created(){
     const gedanurl = this.HOST + 'http://m.kugou.com/plist/index&json=true';
     this.$axios.get(gedanurl)
      .then(res => {
        this.info = res.data.plist.list.info;
      })
   }
}
</script>

<style scoped>
ul{
  width: 100%;
  margin-top: 1px;
}
ul li{
  width: 100%;
  height: 60px;
  padding: 5px;
  background: #fff;
  margin-bottom: 2px;
  line-height: 60px;
  font-size: 12px;
}
ul li img{
  width: 50px;
  padding-left: 5px;
}
ul li span{
  margin-left: 10px;
}
</style>
