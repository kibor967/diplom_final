import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import styles from './styledCarouselHeader.module.scss';

export function CarouselHeader({ img }) {
	return (
		<div className={styles.slider_bike}>
			<Carousel className={styles.slider}>
				{img.map(item => {
					return <img src={item} alt='#' key={item} />;
				})}
			</Carousel>
		</div>
	);
}

CarouselHeader.propTypes = {
	img: PropTypes.array,
};
