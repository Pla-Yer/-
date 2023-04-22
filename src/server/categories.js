import { get, post, patch, del } from '../utils/request';

/**
 * 获取列表

 */
export const loadDataAPI = (query = {}) =>
  get('/api/events/', query);

/**
 * 根据id获取一个

 */
export const loadDataByIdAPI = (id) =>
  get('/api/events/' + id);

/**
 * 新增

 */
export const insertAPI = (data) =>
  post('/api/events/', data);

/**
 * 根据id修改

 */
export const updateByIdAPI = (id, data) =>
  patch('/admin/medicine_categories/' + id, data);

/**
 * 根据id删除

 */
export const delByIdAPI = (id) =>
  del('/api/events/' + id);

/**
 * 删除多个

 */
export const delManyByIds = (ids) =>
  del('/admin/medicine_categories/remove_many?ids=' + ids);
