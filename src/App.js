import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';
import ShowWeather from './Components/ShowWeather';
// import ReduxPromise from 'redux-promise'

function App() {
  return (
    <div className="App" background='cloud.png'>
    <br></br>
      <Weather/>
      <br></br>
      <ShowWeather/>
    </div>
  );
}

export default App;
