import styles from './styledBigButton.module.scss';

export function BigButton({ text }) {
	return <button className={styles.big_button}>{text}</button>;
}
