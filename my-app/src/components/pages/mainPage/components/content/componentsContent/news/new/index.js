import styles from ".././styledNews.module.scss";
import { ButtonBig } from "../../../../../../../generalComponents/button/bigButton/index.js";

export function New (props) {
    return(
        <div className={styles.new} key={props.key}>
            <img src={props.img} alt="" />
            <div className={styles.title_describe_news}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <ButtonBig text="Читать"/>
        </div>
    )
};