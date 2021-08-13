import styles from "../styledColorsBike.module.scss";

export function ColorBike (props) {
    return(
        <li className={styles[props.style]} id={props.index} onClick={props.colorHandler}>
            <li className={styles[props.color]} id={props.index}></li>
        </li>
    )
};