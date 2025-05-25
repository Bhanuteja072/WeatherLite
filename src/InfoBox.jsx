import Card from '@mui/material/Card';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'
export default function InfoBox({info}){
    const init_url="https://images.unsplash.com/photo-1635252517690-1a4438427ba1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const HOT_URl="https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    // let info={
    //     city:"delhi",
    //     feels_like:24.48,
    //     temp:25.05,
    //     temp_min:25.05,
    //     temp_max:28.05,
    //     huumidity:47,
    //     weather:"haze",

    // }
    return(
        <div className="infobox">
            <div className='cardContainer'>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URl : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Min_Temp = {info.temp_min}&deg;C</p>
            <p>Max_Temp = {info.temp_max}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>The Weather can be described as {info.weather} and feels like {info.feels_like}</p>



          
        </Typography>
      </CardContent>
    </Card>
            </div>
    </div>

    )
}