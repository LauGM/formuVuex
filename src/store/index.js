import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios:[],
    respuestaServer:{}
  },
  getters: {
  },
  mutations: {
    recibirRespuestaPost(state, resp){
      state.respuestaServer=resp;
    },
    llenarUsers(state, userActions){
      state.usuarios=userActions
    }
  },
  actions: {
    async postearUser({commit},objetoAEnviar){
      let url="https://my.api.mockaroo.com/users.json?key=140b4040";
      const response = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(objetoAEnviar)
      });
      const respJson = await response.json();//parsea la respuesta a objeto js
      commit('recibirRespuestaPost',respJson)
    },
    async obtenerUsers({commit}){
      let url="https://my.api.mockaroo.com/users.json?key=140b4040";
      const response = await fetch(url);
      const usuarios = await response.json();
      //vuex necesita usar commit para crear el nombre de la mutacion
      commit('llenarUsers',usuarios)
    }
  },
  modules: {
  }
})
