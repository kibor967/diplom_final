import { handleActions } from 'redux-actions';
import { UsersKey } from './keyActions';

export const initialState = '';

export const keyReducer = handleActions(
	{
		[UsersKey]: (state, action) => action.payload,
	},
	initialState
);
