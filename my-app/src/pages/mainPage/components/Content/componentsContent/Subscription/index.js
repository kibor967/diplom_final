import styles from './styledSubscription.module.scss';
import { Button } from '../../../../../../components/generalComponents/Button/LittleButton/button';
import plate from '../../../../../../images/mainPage_images/contentImages/plate.png';

export function Subscription() {
	return (
		<div className={styles.wrapper_subscription}>
			<h2>Подпишитесь на новостную рассылку</h2>
			<div className={styles.input_button}>
				<input type='email' placeholder='Email' />
				<Button text='ПОДПИСАТЬСЯ' />
			</div>
			<img src={plate} alt='' />
		</div>
	);
}
