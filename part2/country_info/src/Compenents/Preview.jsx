
const Preview = (props) =>{

    if(props.country.length===0)
        {
            return(null)
        }
       
    else
        {
            const weathericon = "https://openweathermap.org/img/wn/"+ props.weather[2]+"@2x.png"
            
  return(
   
   <div><h2>{props.country.name.common}</h2>
   <div className="previewbox">
        
        <b>Capital&nbsp;  &nbsp; :  &nbsp;  &nbsp; </b> {props.country.capital}<br></br>
        <b>Area&nbsp; &nbsp; :&nbsp; &nbsp;   </b> {props.country.area}<br></br>
        <b>Languages:</b>  {Object.values(props.country.languages).map(lan => (<div key={lan}> {lan}</div>))} 
        <br></br>
        <img className="flagpreview" src={props.country.flags.png} alt="" />
        </div>
        <div className="previewweather">
            
            <div>Temp: {props.weather[0].toFixed(2)} c <br></br>
            Wind: {props.weather[1]} m/s</div>
            <img src={weathericon}></img>
        </div>
        
        
        </div>
    )}}
    export default Preview


    /**/