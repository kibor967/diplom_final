import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from '../../components/generalComponents/Footer';

export function MainPage() {
	return (
		<div className='wrapper_mainPage'>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}
