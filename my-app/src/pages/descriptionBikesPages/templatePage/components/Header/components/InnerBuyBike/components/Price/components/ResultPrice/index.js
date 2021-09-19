import styles from './styledPrice.module.scss';
import { BigButton } from 'components/generalComponents/Buttons';

export function Price({ price, buy, errorsRegistration }) {
	return (
		<div className={styles.result_price_order_button}>
			<div className={styles.result_price}>
				<h3 className={styles.result}>Итог :</h3>
				<span>{`${price} ₴`}</span>
			</div>
			<BigButton text='Заказать' funk={buy} />
			<p className={styles.errors_text}>
				{errorsRegistration &&
					'Для совершения покупки вам необходимо войти в аккаунт'}
			</p>
		</div>
	);
}
