import {combineReducers,createStore} from 'redux'
import WeatherReducer from '../reducers/WeatherReducer'

export default ()=>{
    const store = createStore(
        combineReducers({
            WeatherReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

        return store;
}