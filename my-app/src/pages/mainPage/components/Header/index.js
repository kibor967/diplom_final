import styles from './styledHeader.module.scss';
import { TopBar } from 'components/generalComponents/TopBar';
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
			<div className={styles.content_header}>
				<p>STREETSTER NATHAN</p>
				<h1>
					Удобный и быстрый <br />
					Твой идеал для покорения города
				</h1>
			</div>
		</div>
	);
}
