import styles from './styledFeaturesStreetster.module.scss';
import { Feature } from './Feature';

export function FeaturesStreetster({ dataFeatures }) {
	return (
		<div className={styles.wrapper_features_streetster}>
			<h2>Велосипеды Streetster это...</h2>
			<div className={styles.features_list}>
				{dataFeatures.map(item => {
					return (
						<Feature
							img={item.img}
							title={item.title}
							text={item.text}
							key={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
