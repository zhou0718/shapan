import Vue from 'vue'
import Vuex from 'vuex'
import storage from "../utils/storage";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    set_token(state,token){
      state.token = token
      storage.set('token',token)
      console.log('token保存成功');
    },
    del_token(state){
      state.token = ''
      storage.remove('token')
    }
  },
  actions: {
  },
  modules: {
  }
})
