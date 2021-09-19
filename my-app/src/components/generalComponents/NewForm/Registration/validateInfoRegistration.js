export default function validateInfo(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = 'Требуется имя пользователя';
	}
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

	if (!values.password2) {
		errors.password2 = 'Требуется пароль пользователя';
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Пароли не совпадают';
	}
	return errors;
}
