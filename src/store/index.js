import Vue from 'vue';
import Vuex from 'vuex';
import RobotModule from './modules/robots';
import UserModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: RobotModule,
    users: UserModule,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
