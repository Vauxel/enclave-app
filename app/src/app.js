import Vue from 'vue'
import App from './App.vue'
import store from '~/store/store.js'
const {ipcRenderer} = require('electron');
const identity = require('~/utils/identity.js');

identity.generateIdentity((err, data) => {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

new Vue({
	el: '#app',
	store,
	render: h => h(App)
});