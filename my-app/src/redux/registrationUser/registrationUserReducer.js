import { handleActions } from 'redux-actions';
import {
	setUsers,
	addUser,
	removeUser,
	findUser,
} from '../registrationUser/registrationUserActions';

export const initialState = [];

export const usersReducers = handleActions(
	{
		[setUsers]: (state, action) => [...action.payload],
		[addUser.receive]: (state, action) => [action.payload, ...state],
		[removeUser.receive]: (state, action) =>
			state.filter(user => user.key !== action.payload),
		[findUser]: (state, action) =>
			state.filter(user => user.key == action.payload),
	},
	initialState
);
