
const Search = (props) =>{
return(
 <div className="search_box">Search country: <input  value={props.value} onChange={props.handleSearch} /></div>
)}
  export default Search