import shop from '../../api/shop';
import cartapi from '../../api/cart';

// initial state
// shape: [{ id, quantity }]
const state = {
  cartlist: [],
  checkoutStatus: null
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: (state, getters, rootState) => {
    return state.cartlist.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.cartlist];
    commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      }
    );
  },
  getCartList ({state, commit}, key, is) {
    cartapi.getCartlist(key, is, (res) => {
      commit('setCheckoutStatus', null);
      commit('getCartList', res);
    });
  },
  addProductToCart ({ state, commit }, key, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.cartlist.find(item => item.id === product.id);
      if (!cartItem) {
        // 加入购物车
        cartapi.addCart({
          key,
          goods_id: product.goods_id,
          quantity: product.quantity
        }, () => {
          commit('pushProductToCart', { id: product.id });
        });
      } else {
        // 数量加1
        cartapi.cartEditQuantity({
          key,
          cart_id: product.cart_id,
          quantity: product.quantity
        }, () => {
          commit('incrementItemQuantity', cartItem);
        });
      }
      // 从购物车中删除

      // remove 1 item from stock
      // commit('decrementProductInventory', { id: product.id })
    }
  },
  removeCart ({state, commit}, productId) {
    cartapi.removeCart(productId, () => {
      commit('removeCart', productId);
    });
  }
};

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.cartlist.push({
      id,
      quantity: 1
    });
  },
  getCartList (state, list) {
    this.cartlist = list;
  },
  incrementItemQuantity (state, { id }) {
    const cartItem = state.cartlist.find(item => item.id === id);
    cartItem.quantity++;
  },
  removeCart (state, {id}) {
    // 修改state的状态
    const cartItem = state.cartlist.find(item => item.id === id);
    this.cartlist.splice(0, cartItem);
  },
  setCartItems (state, { items }) {
    state.cartlist = items;
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};