import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueScroll from 'vue-scrollto'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueScroll)

import routerOptions from './router/route'
import  storeOptions from './stores/store'

const { state, getters, mutations, actions } = storeOptions;
const router = new VueRouter(routerOptions);
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
