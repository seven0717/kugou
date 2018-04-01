<template lang="html">
  <div class="paihang">
     <ul class="lists">
     	<router-link tag="li" v-for="(item,index) in pai" :key="index" :to="{name:'Pai_list',params:{rand_id:item.rankid}}">
     		<img :src="item.imgurl.replace(/\{\w*\}\//g,'')" height="200" width="200">
     		<span>{{ item.rankname }}</span>
     	</router-link>
     </ul>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
   name:"paihang",
   data(){
   	return{
   		pai:[]
   	}
   },
   created(){
   	const paihangurl = this.HOST + 'rank/list&json=true';

   	this.$axios.get(paihangurl)
   		.then(res => {
   			this.pai = res.data.rank.list;
   		})
   }
}
</script>

<style scoped>
.lists{
	margin-top: 1px;
}

.lists li{
	background: #fff;
	padding: 10px;
	margin-bottom: 3px;
	font-size: 20px;
}
.lists li img{
	width: 100px;
	height: 100px;
}
</style>
