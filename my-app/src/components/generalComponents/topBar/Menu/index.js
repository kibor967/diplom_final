import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styledMenu.module.scss';
import { IoLogoInstagram, IoLogoFacebook, IoIosClose } from 'react-icons/io';

export function MenuTopBar({ open, closeMenu }) {
	return (
		<div className={`${styles.wrapper_menu} ${styles[open]}`}>
			<div className={styles.content_menu}>
				<div className={styles.cross_menu}>
					<IoIosClose onClick={closeMenu} />
				</div>
				<div className={styles.bicycle_series}>
					<NavLink to='/category-page'>ROAD SERIES</NavLink>
					<NavLink to='#'>STREET SERIES</NavLink>
					<NavLink to='#'>MOUNTAIN SERIES</NavLink>
				</div>
				<div className={styles.info_company}>
					<NavLink to='#'>Новости</NavLink>
					<NavLink to='#'>О нас</NavLink>
					<NavLink to='#'>Контакты</NavLink>
				</div>
				<div className={styles.social_network}>
					<IoLogoInstagram className={styles.instagram_icon} />
					<IoLogoFacebook className={styles.facebook_icon} />
				</div>
			</div>
		</div>
	);
}

MenuTopBar.propTypes = {
	open: PropTypes.string,
	closeMenu: PropTypes.func,
};
