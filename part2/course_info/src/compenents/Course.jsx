const Header = (props) => <h1>{props.name}</h1>

const Total = (props) => <p><b>Number of exercises {props.sum}</b></p>

const Part = (props) => {
  const part=props.part;
  return(
  <p key={part.id}> {part.name} {part.exercises} </p>)}


  
const Content = (props) => { 
  const parts = props.parts
 
  const total = parts.map(part => part.exercises).reduce((s, a) => s + a, 0)

  return(
  <div >
    {parts.map(part => <Part key={part.id} part={part}/>)}
    <Total sum={total}/>
  </div> )
}

const Course = (props) => {
  const courses = props.courses
  return(
 <div> 
  {courses.map(course => (<div key={course.id}>
  <Header name={course.name} />
  <Content parts={course.parts} /></div>))}
 </div>
)}

export default Course