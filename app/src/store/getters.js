export default {
	loginStatus: state => state.loginStatus,
	loginError: state => state.loginError,
	serverIP: state => state.server.ip,
	serverPublicKey: state => state.server.publicKey,
	serverSharedSecret: state => state.server.sharedSecret,
	userID: state => state.userID,
	chatLog: state => state.chatLog
}