import Req from 'api/request';
// import axios from 'axios';
import {getXML, postXMl} from './index';

export function userLogin(params) {
  // Req({
  //   url: '?c=login',
  //   type: 'POST',
  //   params: params,
  //   success: res => callback(res),
  //   error: err => error(err),
  //   faild: err => faild(err)
  // });
  console.log(params);
  // return new Promise(function(resolve,reject){
  //   axios.post('http://api.4008050011.com/smapi/index.php?c=login', params).then((res) => {

  //     reject(res.data);
  //   }).catch(err => {
  //     console.log(err);
  //     error(err);
  //   });
  // })
  postXML('?c=login', params).then(res => {
    return res;
  }, err => {
    return err;
  });
}
export let userRegister = function (params) {
  // Req({
  //   url: 'c=login&a=register_mobile',
  //   type: 'POST',
  //   params: params,
  //   success: res => callback(res),
  //   error: err => error(err),
  //   faild: err => faild(err)
  // });
  postXMl('c=login&a=register_mobile', params).then(res => {
    return res;
  });
};

export let userGetInfo = function(callback, error) {
  // Req({
  //   url: '/index.php?s=User_User.Getinfo',
  //   success: res => callback(res),
  //   faild: err => error(err)
  // });
  getXML('?c=login', params).then(res => {
    return res;
  }, err => {
    return err;
  });
};

export let userUpdateInfo = function (params, callback, error) {
  Req({
    url: '/index.php?s=User_User.Renewinfo',
    type: 'POST',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
};

export let uploadAvatar = function (params, callback, error) {
  Req({
    url: '/index.php?s=User_User.Uploadavatar',
    type: 'POST',
    params: params,
    success: res => callback(res),
    faild: err => error(err)
  });
};
