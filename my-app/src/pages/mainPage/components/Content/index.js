import styles from './styledContent.module.scss';
import { Category } from './components/Category';
import { FeaturesStreetster } from './components/FeaturesStreetster';
import { News } from 'pages/mainPage/components/Content/components/News';
import { dataMainPage } from 'dataPages/dataMainPage/data';
import { CompanyDescription } from './components/CompanyDescription';

export function Content() {
	const { dataFeatures, dataNews, dataCategory } = dataMainPage;
	return (
		<div className={styles.wrapper_content}>
			<Category dataCategory={dataCategory} />
			<CompanyDescription />
			<FeaturesStreetster dataFeatures={dataFeatures} />
			<News dataNews={dataNews} />
		</div>
	);
}
