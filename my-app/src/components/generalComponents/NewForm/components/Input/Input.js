import styles from './styledInput.module.scss';
import PropTypes from 'prop-types';

export function FormInput({
	typeInput,
	name,
	description,
	errorsInput,
	handlerChange,
	valueInput,
	titleInput,
	refValue,
}) {
	return (
		<div className={styles.form_inputs}>
			<label className={styles.form_label}>{titleInput}</label>
			<input
				className={styles.form_input}
				type={typeInput}
				name={name}
				placeholder={description}
				value={valueInput}
				onChange={handlerChange}
				ref={refValue}
			/>
			{errorsInput && <p>{errorsInput}</p>}
		</div>
	);
}

FormInput.propTypes = {
	typeInput: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	errorsInput: PropTypes.bool,
	handlerChange: PropTypes.func,
	valueInput: PropTypes.string,
	titleInput: PropTypes.string,
	refValue: PropTypes.object,
};
