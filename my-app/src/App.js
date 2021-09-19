import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/mainPage';
import { CategoryPage } from './pages/categoryPage';
import { TemplatePage } from 'pages/descriptionBikesPages/templatePage';
import { CartPage } from './pages/cartPage';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/main-page' render={() => <MainPage />} />
				<Route path='/category-page' render={() => <CategoryPage />} />
				<Route path='/cart' render={() => <CartPage />} />
				<Route
					path='/bakerstreetPage/1'
					render={() => <TemplatePage dataTypeBike='dataBakerstreet' />}
				/>
				<Route
					path='/broadwayPage/2'
					render={() => <TemplatePage dataTypeBike='dataBroadway' />}
				/>
				<Route
					path='/nathanPage/3'
					render={() => <TemplatePage dataTypeBike='dataNathan' />}
				/>
				<Redirect to='/main-page' />
			</Switch>
		</div>
	);
}

export default App;
