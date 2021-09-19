import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BigButton } from 'components/generalComponents/Buttons';
import styles from '../styledContentPageCategory.module.scss';
import Carousel from 'react-elastic-carousel';
import { v4 } from 'uuid';

export function TypeBike({ title, price, text, img, id, linkPage }) {
	return (
		<div className={styles.wrapper_type_bike}>
			<div className={styles.content_type_bike}>
				<h2>{title}</h2>
				<span>{price}</span>
				<p>{text}</p>
				<NavLink to={`/${linkPage}/${id}`}>
					<BigButton text='ПОДРОБНЕЕ' />
				</NavLink>
			</div>
			<Carousel className={styles.carousel_wrapper}>
				{img.map(item => {
					return <img src={item} alt='' key={v4()} />;
				})}
			</Carousel>
		</div>
	);
}

TypeBike.propTypes = {
	title: PropTypes.string,
	img: PropTypes.array,
	price: PropTypes.string,
	text: PropTypes.string,
	linkPage: PropTypes.string,
	id: PropTypes.number,
};
