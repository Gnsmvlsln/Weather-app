import {WEATHER_FETCH} from '../actions'

export default function (state = [], action) {
 
  console.log('from reducer',action)
    switch (action.type) {
     
      case WEATHER_FETCH:
        console.log(action.payload)
        return [ action.payload.data, ...state]
        
    }
    return state
  }
  
//  switch(action.type){
//     case 'WEATHER_FETCH':
//         return [
//             ...state,action.temp,action.humidity
            
//         ]
//  }
//  return state
// }

// export default WeatherReducer