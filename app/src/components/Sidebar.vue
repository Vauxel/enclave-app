<template>
	<div id="sidebar">
		Channel list goes here
	</div>
</template>

<script>
	export default {
		data () {
			return {
				channels: []
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "../../res/css/styles.scss";

	#sidebar {
		min-width: 250px;
		padding: 10px;
		background-color: $color-primary;
		border-right: solid 1px $color-primary-accent;
	}
</style>