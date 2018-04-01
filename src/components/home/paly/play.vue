<template lang="html">
	<div class="play">
		<div class="header">
			<div class="title">
				<div class="music-info">
					<p>{{ currentUrl.song_name }}</p>
				</div>
			</div>
		</div>
		<div class="song-info">
			<div class="song-info-img">
				<img :src="currentUrl.img">
				<!-- 歌词 -->
				<div class="song-lrc">
					<LRC :currentTime="currentTime" :durationTime="durationTime" :musicid="currentUrl.hash" />
				</div>
			</div>
		</div>
		<div class="song">
			<audio ref="player" :src="currentUrl.play_url" controls autoplay></audio>
		</div>

	</div>
</template>

<script>
	import Vue from "vue"
	const LRC = Vue.component("lrc", (resolve) => require(["../lrc/lrc"], resolve))

	export default {
		name: "play",
		data() {
			return {
				collectAction: false,
				currentUrl: {},
				currentTime: null, // 当前播放时间
				durationTime: null // 整体时间
			}
		},
		components: {
			LRC
		},
		created() {
			const playUrl = this.HOSTplay + "/yy/index.php?r=play/getdata&hash=" + this.$route.params.sqhash
			this.$axios.get(playUrl)
				.then(res => {
					this.currentUrl = res.data.data
				})
				.catch(error => {
					console.log(error);
				})
		},
		methods: {
			addEventListeners() {
				// timeupdate监听播放时间
				this.$refs.player.addEventListener('timeupdate', this._currentTime),
					// canplay监听播放的整体时间
					this.$refs.player.addEventListener('canplay', this._durationTime)
			},
			removeEventListeners: function() {
				this.$refs.player.removeEventListener('timeupdate', this._currentTime)
				this.$refs.player.removeEventListener('canplay', this._durationTime)
			},
			_currentTime() {
				this.currentTime = this.$refs.player.currentTime
				// currentTime是audio标签提供的获取当前播放时间的方法
			},
			_durationTime() {
				this.durationTime = this.$refs.player.duration
				// duration是audio标签提供的获得歌曲播放整体时间的方法
			}
		},
		beforeDestroyed() {
			this.removeEventListeners()
		},
		mounted() {
			this.addEventListeners();
		}
	}
</script>

<style scoped>
	.header {
		padding: 15px;
	}

	.music-info {
		flex: 1;
		font-size: 20px;
	}

	.title {
		display: flex;
		text-align: center;
	}

	.left {
		font-size: 30px;
	}

	.ca {
		color: red;
	}

	.right {
		font-size: 30px;
	}

	.song-info {
		padding: 15px;
	}

	.song-info-img {
		text-align: center;
	}

	.song-info-img img {
		width: 50%;
		border-radius: 5px;
		box-shadow: 0 0 10px 0 rgba(50, 50, 50, .31);
		z-index: 99;
	}

	.song-lrc {
		margin-top: 10px;
		min-height: 50px;
	}

	.iconbox {
		display: flex;
		margin-top: 30px;
	}

	.iconbox .box {
		flex: 1;
	}

	.song {
		width: 100%;
		text-align: center;
	}

	.song audio {
		width: 80%;
	}

	.active {
		color: #222;
	}

	.author {
		font-size: 12px;
		color: #999;
	}
</style>
