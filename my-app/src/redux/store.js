import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { priceReducers } from './descriptionBikesPages/descriptionBikesPagesReducer';
import { usersSagaWatcher } from '../sagas/users';
import { productSagaWatcher } from 'sagas/product';
import { usersReducers } from './registrationUser/registrationUserReducer';
import { userReducer } from './loginUser/loginUserReducer';
import { productReducers } from './productUser/productReducer';
import { keyReducer } from './keyUser/keyReducer';

const rootReducer = combineReducers({
	priceBike: priceReducers,
	usersRegistration: usersReducers,
	userName: userReducer,
	productUser: productReducers,
	keyUser: keyReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(usersSagaWatcher);
sagaMiddleware.run(productSagaWatcher);
