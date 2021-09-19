import styles from './styledForm.module.scss';
import { withPortal } from '../hocs/Portal';
import { AuthorizationUser } from './AuthorizationUser/AuthorizationUser';
import PropTypes from 'prop-types';
import { Login } from './Login/Login';
import { IoIosClose } from 'react-icons/io';
import { useState, useEffect, useCallback } from 'react';
import { Registration } from './Registration/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/registrationUser/registrationUserActions';
import { UsersName } from 'redux/loginUser/loginUserActions';
import { UsersKey } from 'redux/keyUser/keyActions';
import { fetchProduct } from 'redux/productUser/productActions';

export function Form({ closeModal }) {
	const users = useSelector(state => state.usersRegistration);
	const userName = useSelector(state => state.userName);
	const dispatch = useDispatch();
	const [notFindUser, setNotFind] = useState(false);

	useEffect(() => {
		dispatch(fetchUsers());
	});

	const getUserData = login => {
		const findUser = users.filter(item => {
			if (
				item.user.email === login.email &&
				item.user.password === login.password
			) {
				return item;
			}
		});

		if (!findUser[0]) {
			setNotFind(true);
			return;
		}

		dispatch(UsersName(findUser[0].user.name));
		dispatch(UsersKey(findUser[0].key));
	};

	const [showForm, setShowForm] = useState(true);

	const Name = userName;

	const openRegistration = useCallback(() => {
		setShowForm(false);
	}, []);

	const exitHandler = useCallback(() => {
		dispatch(UsersName(''));
		dispatch(UsersKey(''));
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper_form}>
				<div>
					<IoIosClose onClick={closeModal} className={styles.close_modal} />
				</div>
				{Name ? (
					<AuthorizationUser
						userName={`Welcome ${Name}`}
						exitAccount={exitHandler}
					/>
				) : showForm ? (
					<Login
						openRegistration={openRegistration}
						loginPost={getUserData}
						notFindUser={notFindUser}
					/>
				) : (
					<Registration />
				)}
			</div>
		</div>
	);
}

export const ModalForm = withPortal(Form);

Form.propTypes = {
	closeModal: PropTypes.func,
};
