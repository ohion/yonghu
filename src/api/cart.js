// import req from './request';
import axios from 'axios';
export default {
  getCartlist (key, storeCartList, callback, errcb) {
    // req({
    //   url: '/api?c=member_cart&a=cart_list',
    //   type: 'get',
    //   data: {
    //     key,
    //     storeCartList
    //   },
    //   success (res) {
    //     callback(res);
    //   },
    //   error (err) {
    //     errcb(err);
    //   }
    // });
    axios.get('/api?c=member_cart&a=cart_list', {
      key: '0b8b58ed8e23ccb56099fc3f72aba295',
      store_cart_list: storeCartList
    }).then((res) => {
      console.log(res);
      callback(res.data);
    }).catch((err) => {
      console.log(err);
      errcb(err);
    });
  }
};