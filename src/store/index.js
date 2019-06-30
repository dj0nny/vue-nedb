import Vue from 'vue'
import Vuex from 'vuex'

import records from './modules/records'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    records
  },
  strict: true
})
