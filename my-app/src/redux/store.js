import { createStore, combineReducers } from 'redux';
import { mainPageReducer } from './mainPage/mainPageReducer';
import { categoryPageReducer } from './сategoryPage/categoryPageReducer';
import { DescriptionBikesPagesReducer } from './descriptionBikesPages/descriptionBikesPagesReducer';
import { topBarReducer } from './topBar/topBarReducer';

const rootReducer = combineReducers({
	dataMainPage: mainPageReducer,
	dataCategoryPage: categoryPageReducer,
	dataDescriptionBikesPages: DescriptionBikesPagesReducer,
	dataTopBar: topBarReducer,
});

export const store = createStore(rootReducer);
