import React, { Component } from 'react';
import {WeatherFetch} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class Weather extends Component{
constructor(props){
    super(props)
    // this.onSubmit=this.onSubmit.bind(this)
        this.state = {
            term:'chennai',
        }
    }
componentDidMount(){
    const city = this.state.term
        this.props.WeatherFetch(city)
        this.setState({
            term:''
        })
    }

onInputChange=(e)=>{
    e.preventDefault()
    this.setState({
        term: e.target.value
    })
}
onSubmit = (event) => {
    event.preventDefault()
    const city = this.state.term 
    console.log(city+'hgjgj')
    if(!city.match(/^[A-Za-z]+$/) || city ==='')
    {
        alert('Enter a valid City')
    }else{
        this.props.WeatherFetch(city)
        this.setState({
            term: ''
        })
    }
}
  
//   if(city){
//       this.setState({
//           temp:data.main.temp,
//           humidity:data.main.humidity
//       })
//   }
//   const demo = (this.state)
//   this.props.onSubmit({
//     temp:this.state.temp,
//     humidity:this.state.humidity
//   })

//   this.props.WeatherFetch(demo)

//   console.log(this.state.temp)
//   console.log(this.state.humidity)

render () {
    return(
        <div>
        <h1>Find Weather</h1>
        <form onSubmit={this.onSubmit}>
        <input
        className='inputBox'
        value={this.state.term}
        placeholder='&nbsp; Enter a city name here'
        onChange={this.onInputChange}/>
        <button type="submit" className='"btn btn-success btn1'>Submit</button>
        </form>
        </div>
    )
}
}
function mapDispatchToProps (dispatch) {
    return bindActionCreators({ WeatherFetch }, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(Weather)