import styles from './styledTemplatePage.module.scss';
import { Footer } from 'components/generalComponents/Footer';
import { TopBar } from 'components/generalComponents/TopBar';
import { Header } from './components/Header';
import { useSelector } from 'react-redux';

export function TemplatePage() {
	const imagesTopBarBlack = useSelector(
		state => state.dataTopBar.dataSvgTopBarBlack
	);
	return (
		<div className={styles.wrapper_template_Page}>
			<TopBar
				className={styles.top_bar_template}
				logo={imagesTopBarBlack.logo}
				cart={imagesTopBarBlack.cart}
				burger={imagesTopBarBlack.burger}
			/>
			<Header />
			<Footer />
		</div>
	);
}
