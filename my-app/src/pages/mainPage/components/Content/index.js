import styles from './styledContent.module.scss';
import { Category } from './componentsContent/Category';
import { SelectProduct } from './componentsContent//SelectedProducts';
import { CompanyDescription } from './componentsContent/CompanyDescription';
import { FeaturesStreetster } from './componentsContent/FeaturesStreetster';
import { News } from './componentsContent/News';
import { Subscription } from './componentsContent/Subscription';

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
