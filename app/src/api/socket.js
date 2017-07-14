const WebSocket = require('ws');
const crypto = require('~/utils/crypto.js');

import store from '~/store/store.js'

export var socketConnection;

export function initSocketConnection(ip, userID, sharedSecret) {
	try {
		socketConnection = new WebSocket("ws://" + ip + "/login", {
			headers: {
				'Authorization': "HMAC" + " " + crypto.generateAuthToken("/login", userID, sharedSecret)
			}
		});

		socketConnection.on('open', onSocketOpen);
		socketConnection.on('message', onSocketMessage);
	} catch(err) {
		store.commit('LOGIN_ERROR', "Failed to initiate websocket connection");
	}
}

function onSocketOpen() {

}

function onSocketMessage(message) {
	var decrypted = crypto.decryptMessage(new Uint8Array(message), store.getters.serverSharedSecret);

	var parsed = JSON.parse(decrypted);
	console.log("Received:", parsed);

	store.commit('ADD_CHAT_MESSAGE', {
		time: new Date(parsed.time * 1000).toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true }),
		sender: parsed.sender,
		message: parsed.message
	});
}

export function sendTextMessage(message) {
	sendMessage("textmessage", {
		message
	});
}

export function sendMessage(command, data) {
	var payload = command + "|" + JSON.stringify(data);
	var encrypted = crypto.encryptMessage(payload, store.getters.serverSharedSecret);

	socketConnection.send(encrypted, {
		binary: true
	});

	console.log("Sent:", command, data);
}