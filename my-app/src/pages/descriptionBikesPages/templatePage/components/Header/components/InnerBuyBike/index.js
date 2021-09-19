import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styledInnerBuyBike.module.scss';
import { ColorsBike } from './components/ColorsBike';
import { ParametersBike } from './components/ParametersBike';
import { Price } from './components/Price/components/ResultPrice';
import { addProduct } from 'redux/productUser/productActions';

export function InnerBuyBike({ title, price, colors, dataSizes }) {
	const userName = useSelector(state => state.userName);
	const [color, setColor] = useState('');
	const [colorError, setColorError] = useState(false);
	const [sizeRama, setSizeRama] = useState('');
	const [sizeError, setSizeError] = useState(false);
	const [errorsRegistr, setErrorsRegistr] = useState(false);
	const [order, setOrder] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (userName) {
			setErrorsRegistr(false);
		}
	}, [userName]);

	const getColor = useCallback(colorSelect => {
		setColorError(false);
		setColor(colorSelect);
	}, []);

	const getSize = useCallback(sizeSelect => {
		setSizeRama(sizeSelect);
		setSizeError(false);
	}, []);

	const buyBike = {
		nameBike: title,
		colorBike: color,
		size: sizeRama,
		priceBike: price,
	};

	const sendBuyBike = useCallback(() => {
		if (color && sizeRama && userName) {
			setOrder(true);
			setTimeout(() => {
				setOrder(false);
			}, 3500);
			dispatch(addProduct.request(buyBike));
		}

		if (!color) {
			setColorError(true);
		}
		if (!sizeRama) {
			setSizeError(true);
		}

		if (!userName) {
			setErrorsRegistr(true);
		}
	}, [color, sizeRama, userName, buyBike, dispatch]);

	return (
		<div className={styles.inner_buy_bike}>
			<div className={styles.buy_bike}>
				<div className={styles.nameBike_price_color}>
					<h2>{title}</h2>
					<span className={styles.price_for_bike}>{`${price} ₴`}</span>
					<ColorsBike
						colors={colors}
						funkColor={getColor}
						errors={colorError}
					/>
					<ParametersBike
						dataSizes={dataSizes}
						funkSize={getSize}
						errors={sizeError}
					/>
					<Price
						price={price}
						buy={sendBuyBike}
						errorsRegistration={errorsRegistr}
					/>
					{order && (
						<h3 className={styles.order}>
							Товар добавлен в вашу корзину перейдите в нее для совершения
							покупки!
						</h3>
					)}
				</div>
			</div>
		</div>
	);
}

InnerBuyBike.propTypes = {
	title: PropTypes.string,
	price: PropTypes.string,
	colors: PropTypes.array,
};
