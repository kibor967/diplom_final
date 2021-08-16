import { useSelector } from 'react-redux';
import styles from './styledNews.module.scss';
import { Article } from './Article';

export function News() {
	const dataNews = useSelector(state => state.dataMainPage.dataNews);
	const newsList = dataNews.map(item => {
		return (
			<Article
				img={item.img}
				title={item.title}
				text={item.text}
				key={item.id}
			/>
		);
	});
	return (
		<div className={styles.wrapper_news}>
			<h1 className={styles.title_section}>Новости</h1>
			<div className={styles.content_news}>{newsList}</div>
		</div>
	);
}
