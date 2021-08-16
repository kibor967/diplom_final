import styles from '.././styledNews.module.scss';
import { ButtonBig } from '../../../../../../../components/generalComponents/Button/bigButton';

export function Article(props) {
	return (
		<div className={styles.new} key={props.key}>
			<img src={props.img} alt='' />
			<div className={styles.title_describe_news}>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</div>
			<ButtonBig text='Читать' />
		</div>
	);
}
