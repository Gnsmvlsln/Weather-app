import { combineReducers } from 'redux';
// import { promiseReducer } from 'redux-promise-reducer';

import weatherFetch from './WeatherReducer'

const rootReducer = combineReducers({
  // dat: promiseReducer,
  weatherFetch
})

export default rootReducer