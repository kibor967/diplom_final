import styles from './styledLittleButton.module.scss';

export function LittleButton({ text }) {
	return <button className={styles.button_little}>{text}</button>;
}
