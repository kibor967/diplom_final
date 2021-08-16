import { useSelector } from 'react-redux';
import styles from './styledContentPageCategory.module.scss';
import { TypeBike } from './TypeBike';

export function Content() {
	const dataCategory = useSelector(
		state => state.dataCategoryPage.dataTypeBike
	);
	const typeBikeList = dataCategory.map((item, index) => {
		return (
			<TypeBike
				title={item.title}
				price={item.price}
				img={item.img}
				key={index}
				text={item.text}
				img={item.img}
			/>
		);
	});
	return <div className={styles.wrapper_category}>{typeBikeList}</div>;
}
