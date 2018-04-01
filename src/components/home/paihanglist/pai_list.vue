<template lang="html">
  <div class="pai_list">
    <div class="imgs">
      <img :src="imgs.replace(/\{\w*\}\//g,'')" alt="">
    </div>
    <ul>
      <router-link tag="li" :to="{name:'Play',params:{sqhash:item.hash}}" v-for="(item,index) in music" :key="index">{{ item.filename }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:"pai_list",
  data(){
    return{
      music:[],
      imgs:''
    }
  },
  props:{
    rand_id:{
      type:Number,
      default:0
    }
  },
  created(){
    const pai_listurl = this.HOST + "/rank/info/?rankid="+this.$route.params.rand_id+"&page=1&json=true";
    this.$axios.get(pai_listurl)
      .then(res => {
        this.music = res.data.songs.list;
        this.imgs = res.data.info.imgurl
      })
  }
}
</script>

<style scoped>
.imgs{
  width: 100%;
  height: 150px;
  box-sizing: border-box;
}
.imgs img{
  width: 100%;
  height: 150px;
}
ul{
  margin-top: 5px;
}
ul li{
  background: #fff;
  padding: 5px;
  margin-bottom: 2px;
}
</style>
