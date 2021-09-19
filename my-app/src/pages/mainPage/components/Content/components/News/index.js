import styles from './styledNews.module.scss';
import { Article } from './Article';

export function News({ dataNews }) {
	return (
		<div className={styles.wrapper_news}>
			<h1 className={styles.title_section}>Новости</h1>
			<div className={styles.content_news_list}>
				{dataNews.map(item => {
					return (
						<Article
							img={item.img}
							title={item.title}
							text={item.text}
							key={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
}
