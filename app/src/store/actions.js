import api from '~/api'

export default {
	async login({commit}, ip, password, username) {
		commit('LOGIN_ERROR', null);
		commit('LOGIN_STATUS', 1);

		var step1 = await api.auth.attemptConnection(ip);

		if(step1.success == false) {
			commit('LOGIN_ERROR', "Failed to connect to server");
			commit('LOGIN_STATUS', 0);
			return;
		}

		var step2 = await api.auth.sendAuthHandshake(ip);

		if(step2.success == false) {
			commit('LOGIN_ERROR', "Authentication handshake with server failed");
			commit('LOGIN_STATUS', 0);
			return;
		}

		commit('SET_SERVER_KEY', step2.serverPublicKey);
		commit('SET_USER_ID', step2.userID);

		var sharedSecret = api.auth.establishSharedSecret(step2.serverPublicKey);
		commit('SET_SERVER_SECRET', sharedSecret);

		api.socket.initSocketConnection(ip, step2.userID, sharedSecret);

		commit('LOGIN_STATUS', 2);
	},
	sendTextMessage({commit}, message) {
		api.socket.sendTextMessage(message);
	}
}