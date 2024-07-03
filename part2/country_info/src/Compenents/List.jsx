const List = (props) =>{

if(props.names.length>10)
    {
        return(<div className="search_list">Too many matchers, Type more letters</div>)
    }

//else if(props.names.length===1)   {         return(<div className="search_list">need to show the country</div>)     }
else if(props.names.length===0)
        {
            return(<div className="search_list">No country found</div>)
        }
else{
return(
<div className="search_list">
    <ul>{props.names.map(name=><li key={name} > {name} </li>)}
    </ul></div>
)}}
export default List