import styles from '../styledSizeBox.module.scss';

export function BoxSize() {
	return (
		<div className={styles.box_size}>
			<input type='checkbox' />
			<input type='checkbox' />
		</div>
	);
}
