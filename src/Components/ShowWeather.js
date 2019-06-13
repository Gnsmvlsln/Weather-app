import React from 'react'
import {connect} from 'react-redux'

class ShowWeather extends React.Component{


renderWeather(data){
  console.log(data)
  const nam = data.name
  const temp = data.main.temp
  const humidity = data.main.humidity
  const wind = data.wind.speed
  
  return(
    
   <div className='temperature'>
   <table cellPadding='10' cellSpacing='5'>
    <tr key={nam}>
      <td><h4>{nam}  : </h4></td>
      <td><p><b>Temperature :</b> <h1>{temp} &#8451;</h1> </p></td>
      <td><p><b>Humidity :</b> <h1>{humidity} %</h1></p></td>
      <td><p><b>Wind :</b> <h1>{wind}</h1> </p></td>
      
    </tr>
    </table>
   </div>
    
  )
}
  render(){
    // const data = Array.from(this.props.state)
    console.log(this.props)
    return(
      <div>
      {console.log(this.props.state.weatherFetch)}
      {this.props.state.weatherFetch.map(this.renderWeather)}
      </div>
          )
  }
}
const mapStateToProps = (state)=>{
 console.log(state)
  return {state}
}
 export default connect(mapStateToProps)(ShowWeather)