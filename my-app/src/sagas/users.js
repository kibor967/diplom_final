import { takeEvery, call, put } from 'redux-saga/effects';

import {
	addUser,
	fetchUsers,
	removeUser,
	setUsers,
} from '../redux/registrationUser/registrationUserActions';

import {
	fetchUsers as fetchUsersService,
	createUser,
	removeUser as removeUserService,
} from '../service/users';

import { normalizeUsers } from '../redux/registrationUser/normalize';

export function* addUserWorker({ payload: user }) {
	const key = yield call(createUser, { user });
	yield put(addUser.receive({ user, key }));
}

export function* fetchUsersWorker() {
	const users = yield call(fetchUsersService);
	yield put(setUsers(normalizeUsers(users)));
}

export function* removeUserWorker({ payload: key }) {
	try {
		yield call(removeUserService, key);
	} catch (e) {
		console.log('smth went wrong');
	}

	yield put(removeUser.receive(key));
}

export function* usersSagaWatcher() {
	yield takeEvery(addUser.request, addUserWorker);
	yield takeEvery(fetchUsers, fetchUsersWorker);
	yield takeEvery(removeUser.request, removeUserWorker);
}
