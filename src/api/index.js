import axios from 'axios';
import {HOST_API} from './config';
import router from 'vue-router';
let token = window.localStorage.getItem('token');
// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
  config => {
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
response => {
  return response;
},
error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
      // 清除token的代码
        window.localStorage.removeItem('token');
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}// 登录成功后跳入浏览的当前页面
        });
    }
  }
  return Promise.reject(error.response.data);
}
);
export let getXML = function(url, data) {
  return new Promise((resolve, reject) => {
    axios.get(HOST_API + url, data).then(res => {
      console.log(`请求接口====> ${HOST_API + url}`);
      console.log(res);
      resolve(res.data);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
};
export let postXML = function(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(HOST_API + url, data).then(res => {
      console.log(`请求接口====> ${HOST_API + url}`);
      console.log(res);
      resolve(res.data);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
};