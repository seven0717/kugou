<template lang="html">
  <div class="list">
     <ul class="lists" v-for="(item,index) in lists" :key="index">
        <router-link tag="li" :to="{name:'Play',params:{sqhash:item.sqhash}}">{{ item.filename }}</router-link>
     </ul>
  </div>
</template>

<script>
export default {
   name:"list",
   data(){
      return{
         lists:[]
      }
   },
   created(){
      const listURL = this.HOST + '/?json=true';
      this.$axios.get(listURL)
         .then(res => {
            this.lists = res.data.data;
         })
   },
   methods:{

   }
}
</script>

<style scoped>
.lists{
   /* width: 100%; */
   background: #fff;
}
.lists li{
   /* height: 60px; */
   padding-left: 10px;
   border-bottom: 1px solid #999;
   line-height: 40px;
   font-size: 18px;
   width: 100%;
}
</style>
