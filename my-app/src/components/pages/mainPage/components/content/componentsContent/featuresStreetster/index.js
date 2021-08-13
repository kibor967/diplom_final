import { useSelector } from 'react-redux';
import styles from './styledFeaturesStreetster.module.scss';
import { Feature } from './feature';

export function FeaturesStreetster () {
    const dataFeatures = useSelector((state => state.dataMainPage));
    const featuresList = dataFeatures.dataFeaturesStreetster.map((item , index) => {
        return <Feature
                    img = {item.img}
                    title = {item.title}
                    text = {item.text} 
                    index = {index} 
               />
    });
    
    return (
        <div className={styles.wrapper_features_streetster}>
            <h2>Велосипеды Streetster это...</h2>
            <div className= {styles.features}>
                { featuresList }
            </div>
        </div>
    ) 
  };
  
  