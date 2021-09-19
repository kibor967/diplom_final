import styles from './styledTemplatePage.module.scss';
import { Footer } from 'components/generalComponents/Footer';
import { TopBar } from 'components/generalComponents/TopBar';
import { Header } from './components/Header';
import { dataDescriptionBikesPages } from 'dataPages/dataDescriptionBikesPages/dataDescriptionBikesPages';
import { dataTopBar } from 'dataPages/dataTopBar/dataTopBar';

export function TemplatePage({ dataTypeBike }) {
	const imagesTopBarBlack = dataTopBar.dataSvgTopBarBlack;
	return (
		<div className={styles.wrapper_template_Page}>
			<TopBar
				className={styles.top_bar_template}
				logo={imagesTopBarBlack.logo}
				cart={imagesTopBarBlack.cart}
				burger={imagesTopBarBlack.burger}
				iconUserBlack='iconUser_black'
			/>
			<Header dataHeader={dataDescriptionBikesPages.dataHeader[dataTypeBike]} />
			<Footer />
		</div>
	);
}
