const ListPeople = (props) =>{

return(<li key={props.name} > {props.name} : {props.number} <button className='deleteButton' id={props.id} onClick={props.deleteOne}>Delete</button></li>)}
export default ListPeople