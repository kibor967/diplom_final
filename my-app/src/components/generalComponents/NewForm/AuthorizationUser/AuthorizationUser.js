import styles from './styledUser.module.scss';
import PropTypes from 'prop-types';
import user from '../../../../images/form_images/user.png';

export function AuthorizationUser({ userName, exitAccount }) {
	return (
		<div className={styles.wrapper_user}>
			<h1>{userName}</h1>
			<img className={styles.icon_user} src={user} alt='' />
			<div className={styles.buttons}>
				<button onClick={exitAccount}>Выйти из аккаунта</button>
			</div>
		</div>
	);
}

AuthorizationUser.propTypes = {
	userName: PropTypes.string,
	exitAccount: PropTypes.func,
};
