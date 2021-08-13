import styles from "./styledInnerBuyBike.module.scss";
import { ColorsBike } from "./components/colorsBike";
import {ParametersBike} from "./components/parametersBike";

export function InnerBuyBike (props) {

    return(
        <div className={styles.inner_buy_bike}>
        <div className={styles.buy_bike}>
            <div className={styles.nameBike_price_color}>
                <h2>{props.title}</h2>
                <span className={styles.price_for_bike}>{props.price}</span>
                <ColorsBike colors={props.colors} />
                <ParametersBike />
            </div>
        </div>
    </div>
    )
};