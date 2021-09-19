import styles from './styledHeaderPageCategory.module.scss';
import { TopBar } from 'components/generalComponents/TopBar';
import bicycle from 'images/categoriesPage_images/headerImages/bicycle.png';
import { dataTopBar } from 'dataPages/dataTopBar/dataTopBar';

export function Header() {
	const imagesTopBarWhite = dataTopBar.dataSvgTopBarWhite;
	return (
		<div className={styles.wrapper_header}>
			<TopBar
				logo={imagesTopBarWhite.logo}
				cart={imagesTopBarWhite.cart}
				burger={imagesTopBarWhite.burger}
			/>
			<div className={styles.wrapper_content_header}>
				<div className={styles.img_bicycle}>
					<img src={bicycle} alt='' />
				</div>
				<div className={styles.content_header}>
					<h1>OFFROAD SERIES</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. <br /> <br /> Duis aute irure dolor
						in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
						in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
}
