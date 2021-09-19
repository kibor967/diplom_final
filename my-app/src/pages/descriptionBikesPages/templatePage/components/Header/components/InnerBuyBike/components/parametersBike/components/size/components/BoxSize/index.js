import PropTypes from 'prop-types';
import { useRef } from 'react';
import styles from './styledBoxSizeItem.module.scss';

export function BoxSize({ sizeValue, sizeBikeHandler, number }) {
	const sizeBike = useRef();
	return (
		<div className={styles.wrapper_label_size}>
			<label className={styles.label}>
				<input
					ref={sizeBike}
					type='radio'
					className={styles.checkbox}
					value={sizeValue}
					name='radioSize'
					onClick={() => {
						sizeBikeHandler(sizeBike.current.value);
					}}
				/>
				<span className={styles.fake}></span>
				<span className={styles.number_size}>{number}</span>
			</label>
		</div>
	);
}

BoxSize.propTypes = {
	sizeItem: PropTypes.string,
};
