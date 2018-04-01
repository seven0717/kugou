<template lang="html">
  <div class="xinge">
     <!-- 轮播图 -->
     <Sper />
     <List />
  </div>
</template>

<script>

import Sper from "./swiper/sper"
import List from "./xinge-list/list"

export default {
   name:"xinge",
   data(){
      return{
         
      }
   },
   components:{
      Sper,
      List
   }
}
</script>

<style scoped>

</style>
