<template>
	<div id="login">
		<div class='login-box' @keyup.enter="login()">
			<img src="../../res/images/logo.png" class="login-logo">
			<div class="login-error" v-if="error"><i class="fa fa-exclamation-circle fa-fw"></i> {{ error }}</div>
			<div class="input-header"><i class="fa fa-flag fa-fw"></i> Server IP</div>
			<input type="text" class="input-field" v-model="ip">
			<div class="input-header"><i class="fa fa-lock fa-fw"></i> Password</div>
			<input type="text" class="input-field" v-model="password">
			<div class="input-header"><i class="fa fa-user fa-fw"></i> Username</div>
			<input type="text" class="input-field" v-model="username">
			<div class="center-align">
				<a href="#" class="btn-outline" v-on:click="login()" v-show="!loggingIn">Connect / Login</a>
				<div class="loader" v-show="loggingIn"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				ip: null,
				password: null,
				username: null
			}
		},
		methods: {
			login: function() {
				this.$store.dispatch('login', this.ip.indexOf(":") == -1 ? this.ip + ":8242" : this.ip, this.password, this.username);
			}
		},
		computed: {
			error: function() {
				return this.$store.getters.loginError;
			},
			loggingIn: function() {
				return this.$store.getters.loginStatus == 1;
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "../../res/css/styles.scss";

	#login {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login-box {
		width: 400px;
		padding: 20px;
		border: solid 3px $color-tertiary;
		border-radius: 5px;
	}

	.login-logo {
		max-width: 100%;
		width: auto;
		height: auto;
	}

	.login-error {
		padding: 10px;
		margin-bottom: 20px;
		background-color: #d9534f;
		border-radius: 5px;
	}

	.loader,
	.loader:before,
	.loader:after {
		background: #ffffff;
		-webkit-animation: load1 1s infinite ease-in-out;
		animation: load1 1s infinite ease-in-out;
		width: 1em;
		height: 4em;
	}

	.loader {
		color: #ffffff;
		text-indent: -9999em;
		margin: 20px auto;
		position: relative;
		font-size: 6px;
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}

	.loader:before,
	.loader:after {
		position: absolute;
		top: 0;
		content: '';
	}

	.loader:before {
		left: -1.5em;
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}

	.loader:after {
		left: 1.5em;
	}

	@-webkit-keyframes load1 {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}

	@keyframes load1 {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}
</style>