import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';

export default function Searchbox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,seterror]=useState(false)

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a94646f9ecd348e939e11e874ef09ee7"

    let getWeatherInfo= async()=>{
        try {
            
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                temp_min:jsonResponse.main.temp_min,
                temp_max:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                wind_speed:jsonResponse.wind.speed,
                feels_like:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description
    
    
            }
            console.log(result);
            return result;
        } catch (error) {
            throw error;            
        }
        

    }
        





    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{

            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            seterror(true);

        }
    }
    return(
        <div className='searchbox'>
            <form action="" onSubmit={handleSubmit}>

            <TextField id="city" label="cityname" variant="outlined" required
             value={city}
             onChange={handleChange} />
            <br />
            <br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such Place exists</p>}
 
            </form>
 

        </div> 
    )
}