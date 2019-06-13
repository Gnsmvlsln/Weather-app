import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'

import App from './App';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'))




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {createStore, applyMiddleware} from 'redux'
// import * as serviceWorker from './serviceWorker';
// import {Provider} from 'react-redux';
// // import configureStore from './Store/configureStore'
// // import promiseMiddleware from 'redux-promise';
// import ReduxPromise from 'redux-promise';
// import rootReducer from './reducers';
// // import { promiseReducer } from 'redux-promise-reducer';

// // import ReduxPromise from 'redux-promise'
// // import promise from 'redux-promise-middleware'/

// // const myLogger = store => next => action=>{
// //     console.log('logged actionnn ', action)
//     // store.dispatch(action.data)
//     // if(action.type === 'WEATHER_FETCH'){  
//     //     console.log("matteth"+action.details)
//     //     return Promise.resolve(action.details)
//     //         .then(actionn=>{
//     //             action.details=actionn
//     //             store.dispatch({
//     //                 type:'WEATHER_FETCH',
//     //                 details:action.details
                    

//     //             })
//     //         })
//     //         console.log('logged actionnn ', action.data)
//     // }else{
//         // next(action)
//     // }
    
// // }
// // const myreducer = promiseReducer()

// // const store = configureStore();
// const store = applyMiddleware(ReduxPromise)(createStore)


// const jsx=(
//     <Provider store={store(rootReducer)}>
//     <App/>
//     </Provider>
// )
// ReactDOM.render(jsx, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
