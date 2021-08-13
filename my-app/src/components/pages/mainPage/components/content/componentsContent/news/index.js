import { useSelector } from 'react-redux';
import styles from "./styledNews.module.scss";
import { New } from "./new";

export function News () {
    const dataNews = useSelector((state => state.dataMainPage));
    const newsList = dataNews.dataNews.map((item, index) => {
        return(
            <New
                img={item.img}
                title={item.title}
                text={item.text}
                key={index} 
            />
        )
    });

    return(
        <div className={styles.wrapper_news}>
            <h1 className={styles.title_section}>Новости</h1>
            <div className={styles.conten_news}>
                {newsList}
            </div>
        </div>
    )
}