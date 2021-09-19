import { NavLink } from 'react-router-dom';
import styles from './styledCategory.module.scss';
import { dataMainPage } from 'dataPages/dataMainPage/data';

export function Category() {
	return (
		<div className={styles.wrapper_category}>
			<h2>Категории</h2>
			<div className={styles.wrapper_types_bikes}>
				{dataMainPage.dataCategory.map(item => {
					return (
						<div className={styles.type_bike} key={item.id}>
							<img src={item.img} alt='' />
							<NavLink to='/category-page'>
								<p>{item.name}</p>
							</NavLink>
						</div>
					);
				})}
			</div>
		</div>
	);
}

// const [counter, setCounter] = useState(0);
// const length = dataCategory.length;

// const arrowLeftHandlerClick = () => {
// 	setCounter(counter === 0 ? length - 1 : counter - 1);
// };
// const arrowRightHandlerClick = () => {
// 	setCounter(counter === length - 1 ? 0 : counter + 1);
// };
// if (!Array.isArray(dataCategory) || dataCategory.length <= 0) {
// 	return null;
// }

// <FiArrowLeftCircle
// 				className={styles.arrow_left}
// 				onClick={arrowLeftHandlerClick}
// 			/>
// 			<FiArrowRightCircle
// 				className={styles.arrow_right}
// 				onClick={arrowRightHandlerClick}
// 			/>
// 			<NavLink to='/category-page' activeClassName={styles.selected_Nav}>
// 				<a href='#topBar'>
// 					<H2>Категории</H2>
// 				</a>
// 			</NavLink>
// 			<div className={styles.slider_category}>
// 				{dataCategory.map((item, index) => {
// 					return (
// 						<div
// 							className={
// 								index === counter ? `${styles.slide_active}` : `${styles.slide}`
// 							}
// 							key={item.id}
// 						>
// 							{index === counter && (
// 								<img
// 									src={item.img}
// 									alt='travel image'
// 									className={styles.image}
// 								/>
// 							)}
// 						</div>
// 					);
// 				})}
// 			</div>
