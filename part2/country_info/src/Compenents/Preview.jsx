const Preview = (props) =>{

    if(props.country.length===0)
        {
            return(null)
        }
       
    else
        {
            console.log(props.country)
  return(
    <div className="previewbox">
        <b>Capital: </b>{props.country.capital}<br></br>
        <b>Area:</b> {props.country.area}<br></br>
        <b>Languages:</b> {Object.values(props.country.languages).map(lan => (<div key={lan}> {lan}</div>))} 
        <br></br>
        <img className="flagpreview" src={props.country.flags.png}alt="" />
        

       
        </div>
    )}}
    export default Preview