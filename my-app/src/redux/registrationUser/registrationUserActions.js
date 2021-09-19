import { createAction } from 'redux-actions';
import { twoWayActions } from './utils';

const prefix = 'users:';

export const setUsers = createAction(`${prefix}set_users`);
export const fetchUsers = createAction(`${prefix}fetch_users`);
export const addUser = twoWayActions(`${prefix}add_user`);
export const removeUser = twoWayActions(`${prefix}remove_user`);
export const findUser = createAction(`${prefix}_find`);
