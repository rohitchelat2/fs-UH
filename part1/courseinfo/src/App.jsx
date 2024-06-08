import { useState } from 'react'
const App = () => {
  const course = 'Half Stack application development'
  const parts = [{ name: 'Fundamentals of React', exercises: 10},{ name: 'Using props to pass data', exercises: 7}, { name: 'State of a component', exercises: 14}]


  return (
    <div>
      <Head course={course}/>
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total  exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
      
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
      <Parts name={props.part1.name} exercises={props.part1.exercises}/>
      <Parts name={props.part2.name} exercises={props.part2.exercises}/>
      <Parts name={props.part3.name} exercises={props.part3.exercises}/>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
    <p> Number of exercises = {props.exercises1+props.exercises2+props.exercises3} </p>
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