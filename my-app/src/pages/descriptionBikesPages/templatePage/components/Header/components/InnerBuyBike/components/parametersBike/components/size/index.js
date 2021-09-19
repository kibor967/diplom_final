import styles from './styledSizeBox.module.scss';
import { BoxSize } from './components/BoxSize';
import { useState } from 'react';
import { useCallback } from 'react';

export function SizeRama({ dataSizes, funkSize, errors }) {
	const [selectSize, setSelectSize] = useState('');

	const sizeBikeHandler = useCallback(changeSize => {
		setSelectSize(changeSize);
		funkSize(changeSize);
	}, []);
	
	const sizeRamaBike = dataSizes.map(item => {
		return (
			<BoxSize
				sizeValue={item.rama}
				sizeBikeHandler={sizeBikeHandler}
				number={item.numberSize}
				key={item.id}
			/>
		);
	});
	return (
		<>
			<div className={styles.size_rama}>
				<h3>
					<span className={styles.bold_text}>
						Рама:
						{errors && (
							<p className={styles.errors_size}>
								Вам необходимо выбрать размер
							</p>
						)}
					</span>{' '}
					{selectSize}
				</h3>
			</div>
			<div className={styles.wrapper_sizes}>{sizeRamaBike}</div>
		</>
	);
}
