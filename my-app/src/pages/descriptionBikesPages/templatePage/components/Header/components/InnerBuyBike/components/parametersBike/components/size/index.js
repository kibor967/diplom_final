import styles from './styledSizeBox.module.scss';
import { BoxSize } from './box';

export function SizeRama({ size }) {
	return (
		<>
			<p className={styles.size_rama}>
				<span>Рама:</span>
				{size}
			</p>
			<div className={styles.boxes_size}>
				<BoxSize />
			</div>
		</>
	);
}
