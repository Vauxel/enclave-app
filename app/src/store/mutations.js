export default {
	LOGIN_STATUS(state, value) {
		state.loginStatus = value;
	},
	LOGIN_ERROR(state, error) {
		state.loginError = error;
	},
	SET_SERVER(state, ip, version) {
		state.server.ip = ip;
		state.server.version = version;
	},
	SET_SERVER_KEY(state, key) {
		state.server.publicKey = key;
	},
	SET_SERVER_SECRET(state, secret) {
		state.server.sharedSecret = secret;
	},
	SET_USER_ID(state, userID) {
		state.userID = userID;
	},
	ADD_SERVER_MESSAGE(state, message) {
		state.chatLog.push({
			type: 1,
			message: message
		});
	},
	ADD_CHAT_MESSAGE(state, payload) {
		payload.type = 2;
		state.chatLog.push(payload);
	}
}