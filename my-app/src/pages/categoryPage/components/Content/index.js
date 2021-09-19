import { React } from 'react';
import PropTypes from 'prop-types';
import styles from './styledContentPageCategory.module.scss';
import { TypeBike } from './TypeBike';
import { v4 } from 'uuid';

export function Content({ data }) {
	return (
		<div className={styles.wrapper_category}>
			{data.map(item => {
				return (
					<TypeBike
						title={item.title}
						price={item.price}
						img={item.img}
						key={v4()}
						text={item.text}
						id={item.id}
						linkPage={item.linkPage}
					/>
				);
			})}
		</div>
	);
}

Content.propTypes = {
	data: PropTypes.array,
};
