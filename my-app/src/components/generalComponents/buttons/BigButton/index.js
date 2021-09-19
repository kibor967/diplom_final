import { React } from 'react';
import PropTypes from 'prop-types';
import styles from './styledBigButton.module.scss';

export function BigButton({ text, funk }) {
	return (
		<button onClick={funk} className={styles.big_button}>
			{text}
		</button>
	);
}

BigButton.propTypes = {
	text: PropTypes.string,
};
