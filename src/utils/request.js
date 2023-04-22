import axios from 'axios';
// @ts-ignore

import { getToken, serverUrl } from './tools';

const instance = axios.create({
  baseURL: serverUrl, // 请求的基础地址
  timeout: 5000,
  withCredentials: true,
});

// Add a request interceptor，发起请求之前执行
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // @ts-ignore
    config.headers.token = getToken();

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor，请求返会之后执行
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);


export const get = (url, params = {}) =>
  instance.get(url, { params }).then((res) => res.data);


export const post = (url, data = {}) =>
  instance.post(url, data).then((res) => res.data);


export const put = (url, data = {}) =>
  instance.put(url, data).then((res) => res.data);


export const patch = (url, data = {}) =>
  instance.patch(url, data).then((res) => res.data);

export const del = (url) =>
  instance.delete(url).then((res) => res.data);
