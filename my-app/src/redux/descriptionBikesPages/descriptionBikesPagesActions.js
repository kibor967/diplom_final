import { createAction } from 'redux-actions';

const prefix = 'price:';
export const PriceBike= createAction(`${prefix}get_price`)
export const IncreasePrice = createAction(`${prefix}increase_price`);
export const ReducePrice = createAction(`${prefix}_reducer_price`);
