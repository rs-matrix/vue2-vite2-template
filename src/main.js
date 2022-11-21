import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import '@/utils/element-ui' // 按需引入element-ui

import App from './App.vue'
import store from './store'
import router from './router'

import '@/icons' // icon
import 'virtual:svg-icons-register' // svg-register
import '@/permission' // permission control

import '@/utils/echarts' // 按需引入echarts

/**
 * If you don't want to use mock-server
 * you want to use setupProdMockServer for mock api
 * you can execute: setupProdMockServer()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
import { setupProdMockServer } from '@/utils/mockProdServer'
setupProdMockServer(import.meta.env.VITE_APP_BASE_API)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
