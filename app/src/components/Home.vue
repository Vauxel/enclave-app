<template>
	<div id="home">
		<titlebar></titlebar>
		<div class="home-body">
			<sidebar></sidebar>
			<chat></chat>
		</div>
	</div>
</template>

<script>
	import Titlebar from '~/components/Titlebar.vue'
	import Sidebar from '~/components/Sidebar.vue'
	import Chat from '~/components/Chat.vue'

	export default {
		components: {
			Titlebar,
			Sidebar,
			Chat
		},
		data () {
			return {
				msg: 'Connected!'
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "../../res/css/styles.scss";

	#home {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.home-body {
		flex-grow: 1;
		display: flex;
		flex-direction: row;
	}
</style>