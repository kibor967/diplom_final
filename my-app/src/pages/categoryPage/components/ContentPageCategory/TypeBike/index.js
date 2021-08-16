import { NavLink } from 'react-router-dom';
import { ButtonBig } from '../../../../../components/generalComponents/Button/bigButton/index';
import styles from '.././styledContentPageCategory.module.scss';
import Carousel from 'react-elastic-carousel';

export function TypeBike(props) {
	const bikes = props.img.map((item, index) => {
		return <img src={item} alt='' />;
	});
	return (
		<div className={styles.wrapper_type_bike} key={props.key}>
			<div className={styles.content_type_bike}>
				<h2>{props.title}</h2>
				<span>{props.price}</span>
				<p>{props.text}</p>
				<div className={styles.available_colors}>{props.color}</div>
				<NavLink to='/template-page'>
					<ButtonBig text='ПОДРОБНЕЕ' />
				</NavLink>
			</div>
			<Carousel className={styles.carousel_wrapper}>{bikes}</Carousel>
		</div>
	);
}
