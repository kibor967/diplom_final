import styles from "./styledSizeBox.module.scss";
import { BoxSize } from "./box";

export function SizeRama (props) {
    return(
        <>
            <p className={styles.size_rama}>
            <span>Рама:</span>{props.size}
            </p>
            <div className={styles.boxes_size}>
               <BoxSize />
            </div>
         </>
    )
};