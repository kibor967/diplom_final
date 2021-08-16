import Carousel from 'react-elastic-carousel';
import styles from './styledCarouselHeader.module.scss';

export function CarouselHeader({ img }) {
	const bikes = img.map(item => {
		return <img src={item} alt='#' />;
	});
	return (
		<div className={styles.slider_bike}>
			<Carousel className={styles.slider}>{bikes}</Carousel>
		</div>
	);
}
