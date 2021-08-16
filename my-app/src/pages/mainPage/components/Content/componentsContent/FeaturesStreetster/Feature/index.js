import styles from '.././styledFeaturesStreetster.module.scss';

export function Feature(props) {
	return (
		<div className={styles.feature} key={props.index}>
			<img src={props.img} alt='' />
			<div className={styles.describe_feature}>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</div>
	);
}
