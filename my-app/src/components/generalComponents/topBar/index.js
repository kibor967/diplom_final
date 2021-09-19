import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from './styledBar.module.scss';
import { MenuTopBar } from './Menu';
import { ModalForm } from '../NewForm/Form';

export function TopBar({
	logo,
	cart,
	burger,
	iconUserBlack,
	numberProductCart,
	showNumberCart,
}) {
	const name = useSelector(state => state.userName);
	const [showMenu, setShowMenu] = useState('');
	const [showModal, setShowModal] = useState('');
	const [nameUser, setNameUser] = useState(name);

	const showModalHandler = useCallback(() => {
		setShowModal(true);
	}, []);

	useEffect(() => {
		setNameUser(name);
	}, [name]);

	const closeModalHandler = useCallback(() => {
		setShowModal(false);
	}, []);

	const menuHandler = useCallback(() => {
		setShowMenu('open_menu');
	}, []);

	const closeMenuHandler = useCallback(() => {
		setShowMenu('');
	}, []);

	return (
		<div className={styles.wrapper_topBar}>
			<div className={styles.logo}>
				<NavLink to='/main-page'>
					<img className={styles.logo_company} src={logo} alt='' />
				</NavLink>
			</div>
			<div className={styles.cart_burger_topBar}>
				<div className={styles.cart_top_bar_userIcon}>
					<div className={styles.userIcon_form_user}>
						<span>{nameUser}</span>
						<IoIosPerson
							className={`${styles.icon_user} ${styles[iconUserBlack]}`}
							onClick={showModalHandler}
						/>
						{showModal && <ModalForm closeModal={closeModalHandler} />}
					</div>
					<div className={styles.cart}>
						<NavLink to='/cart'>
							<img className={styles.cart} src={cart} alt='' />
							{showNumberCart && (
								<div className={styles.colProd}>{numberProductCart}</div>
							)}
						</NavLink>
					</div>
					<div className={styles.burger_top_bar}>
						<img
							onClick={menuHandler}
							className={styles.burger}
							src={burger}
							alt=''
						/>
						<MenuTopBar open={showMenu} closeMenu={closeMenuHandler} />
					</div>
				</div>
			</div>
		</div>
	);
}

TopBar.propTypes = {
	logo: PropTypes.string,
	burger: PropTypes.string,
	cart: PropTypes.string,
	iconUserBlack: PropTypes.string,
	numberProductCart: PropTypes.string,
	showNumberCart: PropTypes.bool,
};
