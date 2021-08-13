import { useSelector } from 'react-redux';
import styles from "./styledHeaderTemplatePage.module.scss";
import { CarouselHeader } from './components/carouselHeader';
import { InnerBuyBike } from './components/innerBuyBike';

export function HeaderTemplatePage () {
    const dataDescriptionBikes = useSelector((state => state.dataDescriptionBikesPages));

    return (
        <div className={styles.wrapper_header_templatePage}>
           < CarouselHeader img={dataDescriptionBikes.dataBakerstreet.dataSlider} />
           <InnerBuyBike  
                title={dataDescriptionBikes.dataBakerstreet.dataDescriptionBikes.title}
                price={dataDescriptionBikes.dataBakerstreet.dataDescriptionBikes.price}
                colors={dataDescriptionBikes.dataBakerstreet.dataInnerBuyBike.colors}
           />
        </div>
    ) 
  };
  
  