import styles from  './styledBigButton.module.scss';

export function ButtonBig (props) {
    return (
        <button className={styles.big_button}>{props.text}</button>
    ) 
  };
  
  