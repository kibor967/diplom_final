import { useSelector } from 'react-redux';
import { CarouselHeader } from './components/CarouselHeader';
import { InnerBuyBike } from './components/InnerBuyBike';
import styles from './styledHeaderTemplatePage.module.scss';

export function HeaderTemplatePage() {
	const dataDescriptionBikes = useSelector(
		state => state.dataDescriptionBikesPages
	);
	return (
		<div className={styles.wrapper_header_templatePage}>
			<CarouselHeader img={dataDescriptionBikes.dataBakerstreet.dataSlider} />
			<InnerBuyBike
				title={dataDescriptionBikes.dataBakerstreet.dataDescriptionBikes.title}
				price={dataDescriptionBikes.dataBakerstreet.dataDescriptionBikes.price}
				colors={dataDescriptionBikes.dataBakerstreet.dataInnerBuyBike.colors}
			/>
		</div>
	);
}
