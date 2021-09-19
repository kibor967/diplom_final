import styles from './styledColorBike.module.scss';
import { useRef } from 'react';

export function RadioColor({ color, changeColor, colorStyle }) {
	const colorInput = useRef();

	return (
		<>
			<label className={styles.label}>
				<input
					ref={colorInput}
					name='radioColor'
					type='radio'
					className={styles.radio_color}
					value={color}
					onClick={() => {
						changeColor(colorInput.current.value);
					}}
				/>
				<div className={`${styles.fake} ${styles[colorStyle]}`}>
					<div className={styles.little_box_into_checkbox}></div>
				</div>
			</label>
		</>
	);
}
