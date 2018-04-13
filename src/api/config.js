export const CODE_OK = 200;
export const CODE_ERR = 501;
/* eslint-disable */
export const HOST_API = process.env.NODE_ENV === 'production' ?
  // 'http://web.pjpiao.com/public' :
  // 'http://web.pjpiao.com/public';
  '/api':'/api'
export const posPath = 'http://shopapi.36939.net:8020/service.asmx/';
export const WX_HOST = process.env.NODE_ENV === 'production' ?
  // 'http://wx.pjpiao.com' : 'http://wxt.pjpiao.com';
  'http://shopapi.36939.net:8020/service.asmx/':'http://shopapi.36939.net:8020/service.asmx/'
/* eslint-enable */
