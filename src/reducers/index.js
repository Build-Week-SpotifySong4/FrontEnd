import { combineReducers } from 'redux';

import { dashboardReducer } from './dashboardReducer';
import { savedReducer } from './savedReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
    dashboardReducer, 
    savedReducer,
    searchReducer
});