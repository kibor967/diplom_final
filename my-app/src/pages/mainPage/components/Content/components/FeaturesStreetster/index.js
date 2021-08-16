import { useSelector } from 'react-redux';
import styles from './styledFeaturesStreetster.module.scss';
import { Feature } from './Feature';

export function FeaturesStreetster() {
	const dataFeatures = useSelector(state => state.dataMainPage);
	const featuresList = dataFeatures.dataFeaturesStreetster.map(item => {
		return (
			<Feature
				img={item.img}
				title={item.title}
				text={item.text}
				key={item.id}
			/>
		);
	});
	return (
		<div className={styles.wrapper_features_streetster}>
			<h2>Велосипеды Streetster это...</h2>
			<div className={styles.features}>{featuresList}</div>
		</div>
	);
}
