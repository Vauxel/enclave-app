const path = require('path');
const fs = require('fs');
const sodium = require('libsodium-wrappers');
const {app} = require('electron').remote;

export const identityFile = path.join(app.getPath('userData'), 'identity.json');
export var clientIdentity;

function identityExists() {
	return fs.existsSync(identityFile);
}

export function generateIdentity(callback) {
	if(identityExists()) {
		return loadIdentity(callback);
	}

	var keypair = sodium.crypto_box_keypair();

	var pubKey = sodium.to_hex(keypair.publicKey);
	var privKey = sodium.to_hex(keypair.privateKey);

	var identity = {
		public: pubKey,
		private: privKey
	};

	fs.writeFile(identityFile, JSON.stringify(identity), 'utf8', (err) => {
		if(err) {
			throw new Error("Failed to write identity file");
		} else {
			return callback(null, identity);
		}
	});

	clientIdentity = identity
}

export function loadIdentity(callback) {
	if(!identityExists()) {
		return generateIdentity(callback);
	}

	fs.readFile(identityFile, 'utf8', (err, data) => {
		if(err) {
			throw new Error("Failed to read identity file");
		} else {
			var identity = JSON.parse(data);
			clientIdentity = identity
			return callback(null, identity);
		}
	});
}

export function regenerateIdentity(callback) {
	if(!identityExists()) {
		return generateIdentity(callback);
	}

	fs.unlink(identityFile, (err) => {
		if(err) {
			throw new Error("Failed to regenerate identity file");
		} else {
			return generateIdentity(callback);
		}
	})
}