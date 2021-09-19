import styles from './styledRegistration.module.scss';
import { useRef, useState, useEffect, useCallback } from 'react';
import validate from './validateInfoRegistration';
import { FormInput } from '../components/Input/Input';
import { addUser } from 'redux/registrationUser/registrationUserActions';
import { useDispatch } from 'react-redux';

export const Registration = () => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	});

	const [errors, setErrors] = useState({});
	const [dataUser, setDataUser] = useState('');

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

	const inputName = useRef(values.username);
	const inputPassword = useRef(values.password);
	const inputEmail = useRef(values.email);
	const confirmPassword = useRef(values.password2);

	const dataRegistration = {
		name: inputName.current.value,
		email: inputEmail.current.value,
		password: inputPassword.current.value,
		confirmPassword: confirmPassword.current.value,
	};

	const submitHandler = useCallback(
		user => e => {
			e.preventDefault();
			setErrors(validate(values));
			setValues({ email: '', password: '', username: '', password2: '' });
			setDataUser(user);
		},
		[values]
	);

	const sendingData = useCallback(
		dataRegistration => {
			dataRegistration
				? dispatch(addUser.request(dataRegistration))
				: console.log(null);
		},
		[dispatch, dataRegistration]
	);

	useEffect(() => {
		if (Object.keys(errors).length === 0) {
			sendingData(dataUser);
		}
	}, [errors, dataUser]);

	return (
		<form
			onSubmit={submitHandler(dataRegistration)}
			className={styles.form}
			noValidate
		>
			<FormInput
				typeInput='text'
				name='username'
				description='Enter your user name'
				handlerChange={changeHandler}
				valueInput={values.username}
				errorsInput={errors.username}
				titleInput='Name-user'
				refValue={inputName}
			/>
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
			<FormInput
				typeInput='password'
				name='password2'
				description='Confirm your password'
				handlerChange={changeHandler}
				valueInput={values.password2}
				errorsInput={errors.password2}
				titleInput='Confirm-password'
				refValue={confirmPassword}
			/>
			<button className={styles.form_input_btn} type='submit'>
				Sign up
			</button>
		</form>
	);
};
