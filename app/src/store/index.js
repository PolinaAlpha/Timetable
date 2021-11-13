import { createStore } from "vuex";
import { authModule } from './authModule.js';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule
  },
});
