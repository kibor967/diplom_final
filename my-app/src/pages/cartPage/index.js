import styles from './styledCartPage.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TopBar } from 'components/generalComponents/TopBar';
import { dataTopBar } from 'dataPages/dataTopBar/dataTopBar';
import { Footer } from 'components/generalComponents/Footer';
import { Products } from './Products';
import { fetchProduct } from 'redux/productUser/productActions';

export function CartPage() {
	const imagesTopBarBlack = dataTopBar.dataSvgTopBarBlack;
	const productsUser = useSelector(state => state.productUser);
	const [colProducts, setColProducts] = useState('');
	const [haveProduct, setHaveProduct] = useState(false);
	const dispatch = useDispatch();
	const [priceFinal, setPriceFinal] = useState('');

	useEffect(() => {
		dispatch(fetchProduct());
		if (!productsUser) {
			setHaveProduct(false);
			return;
		} else if (productsUser.length > 0) {
			const productPrices = productsUser.map(item => item.priceBike);
			const result = productPrices.reduce((previousValue, currentValue) => {
				return previousValue + +currentValue;
			}, 0);

			setPriceFinal(result);
			setColProducts(productsUser.length);
			setHaveProduct(true);
		}
	}, [dispatch, productsUser]);

	return (
		<>
			<TopBar
				logo={imagesTopBarBlack.logo}
				cart={imagesTopBarBlack.cart}
				burger={imagesTopBarBlack.burger}
				iconUserBlack='iconUser_black'
				showNumberCart={haveProduct}
				numberProductCart={colProducts}
			/>
			<div className={styles.wrapper_cart}>
				<h1>Корзина покупок</h1>
				<div className={styles.wrapper_purchases}>
					{haveProduct ? (
						<Products products={productsUser} priceProduct={priceFinal} />
					) : (
						<h2>На данный момент в корзине нет покупок.</h2>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}
