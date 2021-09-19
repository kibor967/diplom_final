import { handleActions } from 'redux-actions';
import { addProduct, removeProduct, setProduct } from './productActions.js';

export const initialState = [];

export const productReducers = handleActions(
	{
		[setProduct]: (state, action) => [...action.payload],
		[addProduct.receive]: (state, action) => [action.payload, ...state],
		[removeProduct.receive]: (state, action) =>
			state.filter(user => user.key !== action.payload),
	},
	initialState
);
