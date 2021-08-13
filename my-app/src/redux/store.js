import { createStore, combineReducers } from 'redux';
import { mainPageReducer } from './reduxMainPage/mainPageReducer';
import { cotegoryPageReducer } from './reduxCotegoryPage/cotegoryPageReducer';
import { DescriptionBikesPagesReducer } from '../redux/reduxDescriptionBikesPages/descriptionBikesPagesReducer';
import { topBarReducer } from './reduxTopBar/topBarReducer';

const rootReducer = combineReducers({
  dataMainPage:mainPageReducer,
  dataCotegoryPage:cotegoryPageReducer,
  dataDescriptionBikesPages:DescriptionBikesPagesReducer,
  dataTopBar:topBarReducer,

})

export const store = createStore(rootReducer);
