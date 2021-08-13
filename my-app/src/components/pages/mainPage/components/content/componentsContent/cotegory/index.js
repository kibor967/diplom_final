import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import styles from './styledCotegory.module.scss';
import { H2 } from '../commonStyles/styledH2';

export function Cotegory () {
    const dataCotegoryImage = useSelector((state => state.dataMainPage.dataCotegory));
    const [counter, setCounter] = useState(0);
    const length = dataCotegoryImage.length;

    const arrowLeftOnclick = () => {
        setCounter(counter === 0 ? length - 1 : counter - 1);
    };

    const arrowRightOnclick = () => {
        setCounter(counter === length - 1 ? 0 : counter + 1);
    };

    if (!Array.isArray(dataCotegoryImage) || dataCotegoryImage.length <= 0) {
        return null;
    };

    return (
        <div className={styles.wrapper_cotegory}>
            <FiArrowLeftCircle className={styles.arrow_left} onClick={arrowLeftOnclick} />
            <FiArrowRightCircle className={styles.arrow_right} onClick={arrowRightOnclick} />
            <NavLink to = "/cotegory-page" activeClassName={styles.selectedNav} ><H2>Категории</H2></NavLink>
            <div className={styles.slider_cotegory}>
                {dataCotegoryImage.map((item, index) => {
                    return(
                        <div
                            className={index === counter ? `${styles.slide_active}` : `${styles.slide}`}
                            key={index}
                        >
                            {index === counter && (
                                <img src={item.img} alt='travel image' className={styles.image} />
                            )}
                        </div>    
                    )
                })}
            </div>
        </div>
    ) 
  };
  
  