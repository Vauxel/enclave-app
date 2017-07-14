<template>
	<div id="chat">
		<div class="chat-log">
			<div class="chat-entry" v-for="entry in chatLog">
				<span class="chat-entry-time">{{ entry.time }}</span>
				<span class="chat-entry-name">{{ entry.sender }}</span>
				<span class="chat-entry-message">{{ entry.message }}</span>
			</div>
		</div>
		<div class="chat-box">
			<input type="text" class="message-input" v-model="message" @keyup.enter="sendMessage()">
			<a href="#" class="message-submit" v-on:click="sendMessage()">Send</a>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				message: "",
			}
		},
		methods: {
			sendMessage: function() {
				this.$store.dispatch('sendTextMessage', this.message);
				this.message = "";
			}
		},
		computed: {
			chatLog: function() {
				return this.$store.getters.chatLog;
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "../../res/css/styles.scss";

	#chat {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		margin: 10px;
	}

	.chat-log {
		flex-grow: 1;
		padding: 10px;
		background-color: $color-secondary;
		border: solid 2px $color-tertiary;
	}

	.chat-entry {
		padding: 10px 0px;
		border-bottom: solid 1px $color-secondary-accent;

		&:first-of-type {
			padding-top: 0px;
		}

		.chat-entry-time {
			color: $text-offwhite;
			font-size: 0.75em;
			margin-right: 1px;
		}

		.chat-entry-name {
			color: $text-hightlight;
			margin-right: 1px;
		}

		.chat-entry-message {

		}
	}

	.chat-box {
		display: flex;
		flex-align: bottom;
		margin-top: 5px;
		background-color: $color-primary-accent;
		border: solid 2px $color-tertiary;
	}

	input.message-input {
		display: inline-flex;
		flex-grow: 1;
		box-sizing: border-box;
		padding: 7.5px;
		background-color: $color-primary-accent;
		border: none;
		color: #f7f7f7;

		&:hover {
			border-color: #101114;
		}

		&:focus {
			border-color: #101114;
		}
	}

	a.message-submit {
		display: inline-flex;
		margin-left: 5px;
		padding: 6px 10px;
		background-color: $color-tertiary;
		border-left: solid 2px $color-tertiary;
		text-align: center;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 0.9em;

		&:hover {
			background-color: $color-primary;
		}
	}
</style>