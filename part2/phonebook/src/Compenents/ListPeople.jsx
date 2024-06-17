import { useState } from 'react'

const ListPeople = (props) =>(<li key={props.name} > {props.name} : {props.number}</li>)
export default ListPeople