import Carousel from "react-elastic-carousel";
import styles from "./styledCarouselHeader.module.scss";

export function CarouselHeader (props) {
    const bikes = props.img.map((item, index) => {
        return <img src={item} alt="fsdfsd" />
    });

    return(
        <div className={styles.slider_bike}>
            <Carousel className={styles.slider}>
                {bikes}
            </Carousel>
        </div>
    )
};