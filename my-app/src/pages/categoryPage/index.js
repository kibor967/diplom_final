import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from 'components/generalComponents/Footer';
import { dataCategoryPage } from 'dataPages/dataCategoryPage/dataCategoryPage';

export function CategoryPage() {
	return (
		<div className='wrapper_category_Page'>
			<Header />
			<Content data={dataCategoryPage.dataTypeBike} />
			<Footer />
		</div>
	);
}
