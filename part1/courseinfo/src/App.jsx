import { useState } from 'react'
const App = () => {
  const course ={ name: 'Half Stack application development',
     parts: [{ name: 'Fundamentals of React', exercises: 10},
    { name: 'Using props to pass data', exercises: 7}, 
    { name: 'State of a component', exercises: 14}]}
  
  return (
    <div>
      <Head course={course.name}/>
      <Content parts={course.parts}/>
      <Total  parts={course.parts}/>
      
     </div>
  )
}

const Head = (props) => {
  return (
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {

  return ( 
    <div>
      {props.parts.map(value => <Parts name={value.name} exercises={value.exercises} />)}
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
    <p> Number of exercises = {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} </p>
    </div>
  )
}

const Parts = (props) => {
  return (
    <div>
      <p>  {props.name} = {props.exercises}  </p>
    </div>
  )
}


export default App