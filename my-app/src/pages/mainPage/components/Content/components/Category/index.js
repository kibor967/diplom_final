import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import styles from './styledCategory.module.scss';
import { H2 } from '../CommonStyles/styledH2';

export function Category() {
	const dataCategoryImage = useSelector(
		state => state.dataMainPage.dataCategory
	);
	const [counter, setCounter] = useState(0);
	const length = dataCategoryImage.length;

	const arrowLeftHandlerClick = () => {
		setCounter(counter === 0 ? length - 1 : counter - 1);
	};
	const arrowRightHandlerClick = () => {
		setCounter(counter === length - 1 ? 0 : counter + 1);
	};
	if (!Array.isArray(dataCategoryImage) || dataCategoryImage.length <= 0) {
		return null;
	}
	return (
		<div className={styles.wrapper_category}>
			<FiArrowLeftCircle
				className={styles.arrow_left}
				onClick={arrowLeftHandlerClick}
			/>
			<FiArrowRightCircle
				className={styles.arrow_right}
				onClick={arrowRightHandlerClick}
			/>
			<NavLink to='/category-page' activeClassName={styles.selected_Nav}>
				<H2>Категории</H2>
			</NavLink>
			<div className={styles.slider_category}>
				{dataCategoryImage.map((item, index) => {
					return (
						<div
							className={
								index === counter ? `${styles.slide_active}` : `${styles.slide}`
							}
							key={item.id}
						>
							{index === counter && (
								<img
									src={item.img}
									alt='travel image'
									className={styles.image}
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
