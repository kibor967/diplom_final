import { useSelector } from 'react-redux';
import styles from "./styledContentPageCotegory.module.scss";
import { TypeBike } from "./typeBike";

export function CotegoryContent () {
    const dataCotegory = useSelector((state => state.dataCotegoryPage.dataTypeBike));

    const typeBikeList = dataCotegory.map((item, index) => {
        return  <TypeBike
                    title={item.title}
                    price={item.price}  
                    img={item.img} 
                    key={index}
                    text={item.text}
                    img={item.img}
                />
    })
    
    return(
        <div className={styles.wrapper_cotegory}>
            {typeBikeList}
        </div>
    )
};