import { useState, useCallback } from 'react';
import styles from './styledColorsBike.module.scss';
import { RadioColor } from './RadioColor';

export function ColorsBike({ colors, funkColor, errors }) {
	const [selectColor, setSelectColor] = useState('');

	const changeColorHandler = useCallback(changeColor => {
		setSelectColor(changeColor);
		funkColor(changeColor);
	}, []);

	return (
		<div className={styles.wrapper_colors}>
			<p>
				<span>Цвет:</span>
				{selectColor}
			</p>
			<p className={styles.erros_text}>
				{errors && 'Вам необходимо выбрать цвет'}{' '}
			</p>
			<div className={styles.colors_list}>
				{colors.map(item => {
					return (
						<RadioColor
							color={item.color}
							changeColor={changeColorHandler}
							colorStyle={item.styleColor}
							checkedColor={item.checked}
							key={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
