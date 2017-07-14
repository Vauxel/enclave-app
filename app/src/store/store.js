import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
	loginStatus: 0,
	loginError: null,
	server: {
		ip: null,
		version: null,
		publicKey: null,
		sharedSecret: null
	},
	userID: "",
	chatLog: []
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})