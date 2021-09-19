import { CarouselHeader } from './components/CarouselHeader';
import { InnerBuyBike } from './components/InnerBuyBike';
import styles from './styledHeaderTemplatePage.module.scss';

export function Header({ dataHeader }) {
	const { dataSlider, dataDescriptionBikes, dataInnerBuyBike } = dataHeader;
	return (
		<div className={styles.wrapper_header_template_Page}>
			<CarouselHeader img={dataSlider} />
			<InnerBuyBike
				title={dataDescriptionBikes.title}
				price={dataDescriptionBikes.price}
				colors={dataInnerBuyBike.colors}
				dataSizes={dataInnerBuyBike.size}
			/>
		</div>
	);
}
