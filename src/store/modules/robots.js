import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robots-foo',
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
    foo(state) {
      return `robots-getter/${state.foo}`;
    },
  },
  actions: {
    getParts({ commit }) {
      // using the vue.config.js proxy to avoid cors
      axios.get('/api/parts')
        .then((result) => { commit('updateParts', result.data); })
        .catch(err => console.log(err));
    },
    saveRobot({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },
};
