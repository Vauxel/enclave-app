<template>
	<div id="titlebar">
		<div class="server-name">Test Server</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'Connected!'
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "../../res/css/styles.scss";

	#titlebar {
		-webkit-app-region: drag;
		background-color: $color-secondary;
	}

	.server-name {
		width: 250px;
		padding: 10px;
		border-right: solid 1px $color-secondary-accent;
		color: $text-hightlight;
		font-weight: bold;
		text-align: center;

		.server-edit {

		}
	}
</style>