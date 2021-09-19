import { handleActions } from 'redux-actions';
import { UsersName } from './loginUserActions';

export const initialState = '';

export const userReducer = handleActions(
	{
		[UsersName]: (state, action) => action.payload,
	},
	initialState
);
