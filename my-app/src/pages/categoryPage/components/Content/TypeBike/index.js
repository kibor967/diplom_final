import { NavLink } from 'react-router-dom';
import { BigButton } from '../../../../../components/generalComponents/buttons';
import styles from '.././styledContentPageCategory.module.scss';
import Carousel from 'react-elastic-carousel';

export function TypeBike({ title, price, text, color, img, key }) {
	const bikes = img.map(item => {
		return <img src={item} alt='' />;
	});
	return (
		<div className={styles.wrapper_type_bike} key={key}>
			<div className={styles.content_type_bike}>
				<h2>{title}</h2>
				<span>{price}</span>
				<p>{text}</p>
				<div className={styles.available_colors}>{color}</div>
				<NavLink to='/template-page'>
					<BigButton text='ПОДРОБНЕЕ' />
				</NavLink>
			</div>
			<Carousel className={styles.carousel_wrapper}>{bikes}</Carousel>
		</div>
	);
}
