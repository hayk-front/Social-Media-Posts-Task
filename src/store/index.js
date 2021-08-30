import Vue from 'vue'
import Vuex from 'vuex'

import {requests} from "./modules/requests";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    requests,
  }
});
export default store;
