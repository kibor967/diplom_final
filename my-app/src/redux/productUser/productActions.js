import { createAction } from 'redux-actions';
import { twoWayActions } from './utils';

const prefix = 'product:';
export const setProduct = createAction(`${prefix}set_product`);
export const addProduct = twoWayActions(`${prefix}_add`);
export const fetchProduct = createAction(`${prefix}fetch_product`);
export const removeProduct = twoWayActions(`${prefix}_remove`);
