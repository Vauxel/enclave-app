const sodium = require('libsodium-wrappers');

export function generateSharedSecret(publicKey, privateKey) {
	return sodium.crypto_box_beforenm(sodium.from_base64(publicKey), sodium.from_base64(privateKey));
}

export function generateAuthToken(uniqueData, userID, sharedSecret) {
	var currentTime = (Date.now() / 1000) | 0;
	var token = sodium.crypto_auth(uniqueData + "|" + currentTime, sharedSecret, "base64");
	var authString = sodium.to_base64(sodium.from_string(userID + ":" + currentTime + ":" + token));
	return authString;
}

export function encryptMessage(message, sharedSecret) {
	var nonce = sodium.randombytes_buf(sodium.libsodium._crypto_secretbox_noncebytes(), "uint8array");
	var cipher = sodium.crypto_secretbox_easy(sodium.from_string(message), nonce, sharedSecret, "uint8array");

	var parcel = new Uint8Array(nonce.length + cipher.length);
	parcel.set(nonce);
	parcel.set(cipher, nonce.length);

	return parcel;
}

export function decryptMessage(cipher, sharedSecret) {
	var nonce = cipher.slice(0, sodium.libsodium._crypto_secretbox_noncebytes());
	cipher = cipher.slice(nonce.length, cipher.length);
	return sodium.crypto_secretbox_open_easy(cipher, nonce, sharedSecret, "text");
}