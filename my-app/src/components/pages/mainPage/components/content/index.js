import styles from './styledContent.module.scss';
import { Cotegory } from './componentsContent/cotegory';
import { SelectProduct } from './componentsContent//selectedProducts';
import { CompanyDescription } from './componentsContent/companyDescription';
import { FeaturesStreetster } from './componentsContent/featuresStreetster';
import { News } from './componentsContent/news';
import { Subscription } from './componentsContent/subscription';

export function Content () {
    return (
        <div className={styles.wrapper_content}>
            <Cotegory />
            <SelectProduct />
            <CompanyDescription />
            <FeaturesStreetster />
            <News />
            <Subscription />
        </div>
    ) 
};
  
  