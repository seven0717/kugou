<template lang="html">
  <div class="sper">
     <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in banner" :key="index">
         <img :src="item.imgurl" alt="">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
   name:"sper",
   data(){
      return{
         swiperOption:{
            pagination:{
               el: '.swiper-pagination'
            },
            loop:true,
            autoplay:true
         },
         banner:[]
      }
   },
   components:{
      swiper,
      swiperSlide
   },
   created(){
      const sperURL = this.HOST +'/?json=true'
      this.$axios.get(sperURL)
         .then(res => {
            this.banner = res.data.banner;
         })
         .catch(error => {
            console.log("swiper:",error);
         })
   }
}
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
}
.swiper-slide{
   text-align: center;
   line-height: 150px;
}
.swiper-slide img{
   width: 100%;
   height: 100%;
}
</style>
