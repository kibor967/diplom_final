import styles from '../styledCartPage.module.scss';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '../Product';
import PropTypes from 'prop-types';
import imgBike from '../../../images/cartImages/bike.png';
import { BigButton } from 'components/generalComponents/Buttons';
import { removeProduct } from 'redux/productUser/productActions';
import { NavLink } from 'react-router-dom';

export function Products({ products, priceProduct }) {
	const dispatch = useDispatch();
	const removeProductHandler = useCallback(
		productKey => {
			dispatch(removeProduct.request(productKey));
		},
		[dispatch]
	);

	return (
		<>
			<div className={styles.products}>
				{products &&
					products.map(item => {
						return (
							<Product
								color={item.colorBike}
								size={item.size}
								price={item.priceBike}
								key={item.key}
								id={item.key}
								nameProduct={item.nameBike}
								image={imgBike}
								onRemove={removeProductHandler}
							/>
						);
					})}
			</div>
			<div className={styles.final_price}>
				<p className={styles.delivery}>
					<span className={styles.light}>Доставка:</span> бесплатно
				</p>
				<p className={styles.final}>
					<span className={styles.bold}>Итог:</span> {priceProduct}$
				</p>
			</div>
			<div className={styles.buttons_cart}>
				<NavLink to='/category-page'>
					<BigButton className={styles.btn_left} text='ПРОДОЛЖИТЬ ПОКУПКИ' />
				</NavLink>
				<BigButton className={styles.btn_right} text='ОФОРМИТЬ ЗАКАЗ' />
			</div>
		</>
	);
}

Products.propTypes = {
	products: PropTypes.array,
};
