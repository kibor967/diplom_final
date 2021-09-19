import { NavLink } from 'react-router-dom';
import styles from './styledLogin.module.scss';
import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validate from './validateInfoLogin';
import { FormInput } from '../components/Input/Input';
import { useCallback } from 'react';

export const Login = ({ openRegistration, loginPost, notFindUser }) => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});
	const [login, setLogin] = useState('');

	const changeHandler = useCallback(
		e => {
			const { name, value } = e.target;
			setValues({
				...values,
				[name]: value,
			});
			setErrors({});
		},
		[values]
	);

	const inputEmail = useRef(values.email);
	const inputPassword = useRef(values.password);

	const inputLogin = {
		email: inputEmail.current.value,
		password: inputPassword.current.value,
	};

	const submitHandler = useCallback(
		login => e => {
			e.preventDefault();
			setErrors(validate(values));
			setValues({ email: '', password: '' });
			setLogin(login);
		},
		[values]
	);

	const loginCreate = dataLogin => {
		dataLogin ? loginPost(dataLogin) : console.log('notfound');
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0) {
			loginCreate(login);
		}
	}, [errors]);

	return (
		<form
			onSubmit={submitHandler(inputLogin)}
			className={styles.form}
			noValidate
		>
			<FormInput
				typeInput='email'
				name='email'
				description='Enter your email'
				handlerChange={changeHandler}
				valueInput={values.email}
				errorsInput={errors.email}
				titleInput='Email-user'
				refValue={inputEmail}
			/>
			<FormInput
				typeInput='password'
				name='password'
				description='Enter your password'
				handlerChange={changeHandler}
				valueInput={values.password}
				errorsInput={errors.password}
				titleInput='Password-user'
				refValue={inputPassword}
			/>
			{notFindUser && (
				<p className={styles.errorsFind}>
					Ошибка входа (пользователь не найден) , проверте данные для входа или
					же зарегистрируйтесь по ссылке ниже.{' '}
				</p>
			)}
			<button className={styles.form_input_btn} type='submit'>
				Sign up
			</button>
			<span className={styles.form_input_login}>
				Do you don't have an account yet? Registration
				<NavLink onClick={openRegistration} to='#'>
					here
				</NavLink>
			</span>
		</form>
	);
};

Login.propTypes = {
	notFindUser: PropTypes.bool,
	openRegistration: PropTypes.func,
	loginPost: PropTypes.func,
};
