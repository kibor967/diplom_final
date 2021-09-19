export default function validateInfo(values) {
	let errors = {};

	if (!values.email) {
		errors.email = 'Требуется email пользователя';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Неверный адрес электронной почты';
	}
	if (!values.password) {
		errors.password = 'Требуется пароль пользователя';
	} else if (values.password.length < 6) {
		errors.password = 'Пароль должен быть не менее 6 символов';
	}
	return errors;
}
