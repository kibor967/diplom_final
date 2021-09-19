import { useCallback } from 'react';
import { IoIosClose } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from '../styledCartPage.module.scss';

export function Product({
	image,
	nameProduct,
	color,
	size,
	price,
	onRemove,
	id,
}) {
	const clickHandler = useCallback(() => {
		onRemove(id);
	}, [id]);

	return (
		<>
			<div className={styles.product}>
				<IoIosClose className={styles.cross} onClick={clickHandler} />
				<div className={styles.image_product}>
					<img src={image} alt='bike' />
				</div>
				<div className={styles.info_product}>
					<h3 className={styles.name_product}>{nameProduct}</h3>
					<p className={styles.parameters_product}>
						Цвет:{color} / Рама: {size}{' '}
					</p>
				</div>
				<div className={styles.price_product}>
					<span>{price}$</span>
				</div>
			</div>
		</>
	);
}

Product.propTypes = {
	image: PropTypes.string,
	nameProduct: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	price: PropTypes.string,
	onRemove: PropTypes.func,
	id: PropTypes.string,
};
