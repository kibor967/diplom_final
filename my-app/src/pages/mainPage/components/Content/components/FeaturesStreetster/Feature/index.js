import styles from '../styledFeaturesStreetster.module.scss';

export function Feature({ title, text, img }) {
	return (
		<div className={styles.feature}>
			<img src={img} alt='' />
			<div className={styles.describe_feature}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
}
