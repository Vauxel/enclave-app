const axios = require('axios');
const identity = require('~/utils/identity.js');
const crypto = require('~/utils/crypto.js');

export async function attemptConnection(ip) {
	try {
		var response = await axios.get("http://" + ip);
		if(response.data.app == "enclave_server") {
			return {
				success: true
			};
		} else {
			return {
				success: false
			};
		}
	} catch(err) {
		return {
			success: false,
			error: err,
		};
	}
}

export async function sendAuthHandshake(ip) {
	try {
		var response = await axios.post("http://" + ip + "/auth", {
			publickey: identity.clientIdentity.public
		});

		return {
			success: true,
			serverPublicKey: response.data.publickey,
			userID: response.data.userid
		};
	} catch(err) {
		return {
			success: false,
			error: err,
		};
	}
}

export function establishSharedSecret(publicKey) {
	return crypto.generateSharedSecret(publicKey, identity.clientIdentity.private);
}