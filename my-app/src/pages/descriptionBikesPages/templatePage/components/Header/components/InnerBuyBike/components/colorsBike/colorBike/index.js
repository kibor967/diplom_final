import styles from '../styledColorsBike.module.scss';

export function ColorBike({ style, index, color, colorHandler }) {
	return (
		<li className={styles[style]} id={index} onClick={colorHandler}>
			<li className={styles[color]} id={index}></li>
		</li>
	);
}
