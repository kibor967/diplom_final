import { NavLink } from 'react-router-dom';
import logo from '../../../images/topBar_images/svgTopBarWhite_images/Logo.svg';
import messengers from './messengers.svg';
import styles from './styledFooter.module.scss';

export function Footer() {
	return (
		<div className={styles.wrapper_footer}>
			<div className={styles.footer_content}>
				<div className={styles.logo}>
					<img src={logo} alt='' />
				</div>
				<div className={styles.category_footer}>
					<h3>Категории</h3>
					<NavLink to='bakerstreetPage/1'>ROAD SERIES</NavLink>
					<NavLink to='/broadwayPage/2'>STREET SERIES</NavLink>
					<NavLink to='/nathanPage/3'>MOUNTAIN SERIES</NavLink>
				</div>
				<div className={styles.information_footer}>
					<h3>Информация</h3>
					<NavLink to='/main-page'>О нас</NavLink>
					<NavLink to='/main-page'>Контакты</NavLink>
				</div>
				<div className={styles.messengers_footer}>
					<img src={messengers} alt='' />
				</div>
			</div>
			<h3 className={styles.rights}>© STREETSTER — Все права защищены </h3>
		</div>
	);
}
