import { handleActions } from 'redux-actions';

import {
	IncreasePrice,
	ReducePrice,
	PriceBike,
} from './descriptionBikesPagesActions';

export const initialState = 0;

export const priceReducers = handleActions(
	{
		[PriceBike]: (state, action) => action.payload,
		[IncreasePrice]: (state, action) => {
			const array = [];
			array.push(action.payload);
		},
		[ReducePrice]: (state, action) => state - action.payload,
	},
	initialState
);
