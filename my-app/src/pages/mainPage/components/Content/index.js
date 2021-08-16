import styles from './styledContent.module.scss';
import { Category } from './components/Category';
import { SelectProduct } from './components//SelectedProducts';
import { CompanyDescription } from './components/CompanyDescription';
import { FeaturesStreetster } from './components/FeaturesStreetster';
import { News } from './components/News';
import { Subscription } from './components/Subscription';

export function Content() {
	return (
		<div className={styles.wrapper_content}>
			<Category />
			<SelectProduct />
			<CompanyDescription />
			<FeaturesStreetster />
			<News />
			<Subscription />
		</div>
	);
}
