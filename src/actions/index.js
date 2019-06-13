import axios from 'axios'

// import { API_URL } from '../config'
 const API_KEY = '3bbffe6a2118ec8c1156f096f2883103'
 const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`


export const WEATHER_FETCH = 'WEATHER_FETCH'

export function WeatherFetch (city) {
  const url = `${API_URL}&q=${city}&units=metric  `
  const request = axios.get(url)
  console.log('from action',request)
  
  return {
    type: WEATHER_FETCH,
    payload: request
  } 
}



// import axios from 'axios'

// const API_KEY = '3bbffe6a2118ec8c1156f096f2883103'
// const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// export const WEATHER_FETCH = 'WEATHER_FETCH'

// export function WeatherFetch (city) {
//   console.log(city+'actionn')
//   const url = `${API_URL}&q=${city}&units=metric  `
//   const result = axios.get(url)
//   console.log('action',result)
//   return {
//     type: WEATHER_FETCH,
//     details: result
    
//   } 
// }