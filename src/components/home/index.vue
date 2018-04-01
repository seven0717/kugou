<template lang="html">
  <div class="index">
     <ul class="tit">
        <router-link tag="li" to="/xinge">新歌</router-link>
        <router-link tag="li" to="/paihang">排行</router-link>
        <router-link tag="li" to="/gedan">歌单</router-link>
        <router-link tag="li" to="/geshou">搜索</router-link>
     </ul>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
   name:"index"
}
</script>

<style scoped>
.tit{
   width: 100%;
   height: 60px;
   display: flex;
   line-height: 60px;
   text-align: center;
   background: #fff;
   border-bottom: 1px solid #999;
   justify-content: space-between;
}
.tit li{
   flex: 1;
}
</style>
