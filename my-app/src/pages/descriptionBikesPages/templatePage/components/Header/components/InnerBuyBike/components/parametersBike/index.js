import styles from './styledParametersBike.module.scss';
import { SizeRama } from './components/Size';

export function ParametersBike({ dataSizes, funkSize , errors }) {
	return (
		<div className={styles.parameters_bike}>
			<SizeRama dataSizes={dataSizes} funkSize={funkSize} errors={errors} />
		</div>
	);
}
