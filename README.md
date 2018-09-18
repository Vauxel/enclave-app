# Enclave
A prototype for a server-based, encrypted chat application.  Messages between connected clients and the server are authenticated and encrypted using asymmetric public-key and symmetric secret-key cryptography provided by the [libsodium](https://github.com/jedisct1/libsodium) library.

## Built With
* [Node.js](https://nodejs.org) - client
* [Go](https://golang.org) - server
* [Electron](https://electronjs.org) - cross-platform gui system
* [Vue.js](https://vuejs.org) - dynamic user interface framework
* [libsodium](https://github.com/jedisct1/libsodium) - versatile encryption library

## Installing and Running the Program

Clone the repository to your machine
```
git clone https://github.com/Vauxel/enclave-app.git
cd enclave-app
```

Install the Node requisite modules
```
npm install
```

Run the client
```
npm run dev
npm start
```

#### [Install and spin-up the server backend](https://github.com/Vauxel/enclave-server)
