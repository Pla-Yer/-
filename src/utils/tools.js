
//服务器地址
 

export const serverUrl = 'http://113.54.211.100';

/**
 * 文件上传接口
 */
export const uploadActionUrl = serverUrl + '/common/upload';

/**
 * 设置token
 *
 */
export const setToken = (token) =>
  sessionStorage.setItem('token', token);

/**
 * 获取token
 * 
 */
export const getToken = () => sessionStorage.getItem('token');



