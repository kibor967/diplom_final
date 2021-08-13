import styles from "./styledParametersBike.module.scss";
import { SizeRama } from "./components/size";

export function ParametersBike (props) {
    return(
        <div className={styles.parameters_bike}>
                <SizeRama  />
                <div className={styles.additional_accessories}>
                    <h3 className={styles.title_container_accessories}>Доп.аксессуары</h3>
                    <div className={styles.box_accessorie}>
                        <img src="#" alt="" />
                        <div className={styles.nameAccessorie_price}>
                            <p>{props.nameAccessorie}</p>
                            <span>{props.nameAccessoriePrice}</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={styles.result_price_order_button}>
                    <div className={styles.result_price}>
                         <h3 className={styles.result}>{props.final}</h3>
                         <span>{props.Price}</span>
                    </div>
                    <button>Заказать</button>
                </div>
        </div>       
    )
};