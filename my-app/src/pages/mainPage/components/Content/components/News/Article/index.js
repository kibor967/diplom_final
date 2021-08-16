import styles from '../styledNews.module.scss';
import { BigButton } from '../../../../../../../components/generalComponents/buttons';

export function Article({ img, title, text, id }) {
	return (
		<div className={styles.article} key={id}>
			<img src={img} alt='' />
			<div className={styles.title_describe_article}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<BigButton text='Читать' />
		</div>
	);
}
