import React, { useState } from 'react'
import Searchbox from './Searchbox';
import InfoBox from './InfoBox';



const WeatherApp = () => {
    const[weatherInfo,setWeatherInfo]=useState({
        city:"delhii",
        feels_like:24.48,
        temp:25.05,
        temp_min:25.05,
        temp_max:28.05,
        huumidity:47,
        weather:"haze",
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo );

    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>Weather APP</h2>
        <Searchbox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      
    </div>
  )
}

export default WeatherApp
