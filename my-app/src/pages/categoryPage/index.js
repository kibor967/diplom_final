import { HeaderPageCategory } from './components/HeaderCategoryPage';
import { CategoryContent } from './components/ContentPageCategory';
import { Footer } from '../../components/generalComponents/Footer';

export function CategoryPage() {
	return (
		<div className='wrapper_categoryPage'>
			<HeaderPageCategory />
			<CategoryContent />
			<Footer />
		</div>
	);
}
