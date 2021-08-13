import { useSelector } from 'react-redux';
import styles from './styledSelectProduct.module.scss';
import { H2 } from '../commonStyles/styledH2.js';
import velik from '../../../../../../../images/mainPage_images/contentImages/section_selectProduct_images/bisicle.png';

export function SelectProduct () {
    const dataProd = useSelector((state => state.dataMainPage));

    const productList = dataProd.dataProduct.map((item , index)  => {
        return <div className = {styles.product_select} key = {index}>
                    <img src={item.img} alt="" />
                    <span>{item.text}</span>
               </div>
    });

    return (
        <div className={styles.wrapper_select_products}>
            <H2>Избранные товары</H2>
            <div className={styles.container}>
                <div className={styles.new_advertisement}>
                    <img className = {styles.velik} src={velik} alt="" />
                    <h3>Streetster Bakerstreet</h3>
                    <span>скорость соедененная с удобством</span>
                    <div className={styles.arrow_new_advertisement}>&#8250;</div>
                </div>
                <div className={styles.products_wrapper}>
                    {productList}
                </div>
            </div>
        </div>
    ) 
  };
  
  