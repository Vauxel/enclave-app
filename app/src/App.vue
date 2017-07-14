<template>
	<div id="app">
		<div class="close-button" v-on:click="closeWindow()"><i class="fa fa-times-circle fa-fw"></i></div>
		<login v-if="!isLoggedIn"></login>
		<home v-else></home>
	</div>
</template>

<script>
	import Login from '~/components/Login.vue'
	import Home from '~/components/Home.vue'

	var remote = require('electron').remote;

	export default {
		components: {
			Login,
			Home
		},
		methods: {
			closeWindow: function() {
				remote.getCurrentWindow().close();
			}
		},
		computed: {
			isLoggedIn() {
				return this.$store.getters.loginStatus == 2;
			}
		}
	}
</script>

<style lang="sass">
	@import "../res/css/styles.scss";
	@import "../res/css/font-awesome.min.css";

	html {
		height: 100%;
	}

	body {
		height: 100%;
		margin: auto;
		overflow: hidden;
		background-color: $color-primary;
	}

	#app {
		height: 100%;
		color: $text-color;
	}

	.close-button {
		position: fixed;
		top: 9px;
		right: 9px;
		font-size: 18px;
		z-index: 500;
		-webkit-app-region: no-drag;

		&:hover {
			cursor: pointer;
			color: rgb(244, 67, 54);
		}
	}
</style>