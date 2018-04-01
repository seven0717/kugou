<template lang="html">
  <div class="geshou">
     <el-input v-model="input" placeholder="请输入内容" class="shuru"></el-input>
     <el-button type="primary" @click="dian">搜歌</el-button>
     <ul class="jieguo">
        <router-link tag="li" :to="{name:'Play',params:{sqhash:item.hash}}" v-for="(item,index) in info" :key="index">{{ item.filename }}</router-link>
     </ul>
  </div>
</template>

<script>


export default {
   name:"geshou",
   data(){
      return{
         input:'',
         info:[]
      }

   },
   methods:{
      dian(){
         const search = this.HOSTsearch + '/api/v3/search/song?format=json&keyword='+this.input+'&page=1&pagesize=20&showtype=1';
         console.log(search);
         this.$axios.get(search)
            .then(res => {
               this.info = res.data.data.info;
            })
      }
   }
}
</script>

<style scoped>
.shuru{
   width:80%;
}
.jieguo li{
   height: 40px;
   background: #fff;
   border-bottom: 1px solid #999;
   line-height: 40px;
   padding-left: 15px;
}
</style>
