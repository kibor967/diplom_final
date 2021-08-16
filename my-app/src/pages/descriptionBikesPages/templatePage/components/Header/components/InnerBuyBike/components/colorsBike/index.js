import { useState } from 'react';
import styles from './styledColorsBike.module.scss';
import { ColorBike } from './colorBike';

export function ColorsBike({ colors }) {
	const [selectColor, setSelectColor] = useState('');

	const colorHandler = e => {
		if (e.target.id == 0) {
			setSelectColor('Красный');
		} else if (e.target.id == 1) {
			setSelectColor('Черный');
		} else if (e.target.id == 2) {
			setSelectColor('Голубой');
		}
	};

	const colorsBike = colors.map((item, index) => {
		return (
			<ColorBike
				style={item.style}
				color={item.color}
				index={index}
				colorHandler={colorHandler}
			/>
		);
	});

	return (
		<div className={styles.color_bike}>
			<p>
				<span>Цвет: </span>
				{selectColor}
			</p>
			<ul>{colorsBike}</ul>
		</div>
	);
}
