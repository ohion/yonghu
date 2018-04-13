import Req from './request';
export default {
  getProducts (param, callback, error, faild) {
    Req({
      url: 'c=goods&a=goods_list',
      data: param,
      success: res => callback(res),
      error: err => error(err),
      faild: err => faild(err)
    });
  },
  buyProducts (param, cb, errorCb) {
    Req({
      url: '?c=login',
      data: param,
      success: res => cb(res),
      error: err => errorCb(err),
      faild: err => errorCb(err)
    });
  }
};