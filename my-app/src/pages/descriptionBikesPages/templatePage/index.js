import styles from './styledTemplatePage.module.scss';
import { Footer } from '../../../components/generalComponents/Footer';
import { TopBar } from '../../../components/generalComponents/TopBar';
import { HeaderTemplatePage } from './components/HeaderTemplatePage';
import { useSelector } from 'react-redux';

export function TemplatePage() {
	const imagesTopBarBlack = useSelector(
		state => state.dataTopBar.dataSvgTopBarBlack
	);
	return (
		<div className={styles.wrapper_templatePage}>
			<TopBar
				className={styles.top_bar_template}
				logo={imagesTopBarBlack.logo}
				cart={imagesTopBarBlack.cart}
				burger={imagesTopBarBlack.burger}
			/>
			<HeaderTemplatePage />
			<Footer />
		</div>
	);
}
