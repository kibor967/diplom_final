import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/mainPage';
import { CategoryPage } from './pages/categoryPage';
import { TemplatePage } from './pages/descriptionBikesPages/templatePage';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/main-page' render={() => <MainPage />} />
				<Route path='/category-page' render={() => <CategoryPage />} />
				<Route path='/template-page' render={() => <TemplatePage />} />
				<Redirect to='/main-page' />
			</Switch>
		</div>
	);
}

export default App;
