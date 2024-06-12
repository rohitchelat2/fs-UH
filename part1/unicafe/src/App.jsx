import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  
  return (
    <div>
      <Head text="Give Feedback" />
      <Button handleClick={()=>setGood(good+1) } text="Good" />
      <Button handleClick={()=>setNeutral(neutral+1) } text="Neutral" />
      <Button handleClick={()=>setBad(bad+1) } text="Bad" />
      <Head text="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

const Head = (props) => {
  return (
    <div>
      <h1> {props.text} </h1>
      
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Statistics = (props) => {

  var totalclicks = props.good+props.bad+props.neutral

  if (totalclicks === 0) {
    return (
      <div>
        Waiting for the first response
      </div>
    )
  }
  var pergood=(props.good/totalclicks)*100
  var averagerating = (props.good-props.bad)/totalclicks
  return(
    <table><tbody>
    <StatisticLine text="Total clicks :" value={totalclicks} />
    <StatisticLine text="Good :" value={props.good} /> 
    <StatisticLine text="Percentage of postive response :" value={pergood}/>
    <StatisticLine text="Neutral :" value={props.neutral}/>
    <StatisticLine text="Bad :" value={props.bad} />
    <StatisticLine text="Average rating :" value={averagerating} />
    </tbody></table>
  )
  }

  const StatisticLine = (props) => (<tr><td>{props.text}</td><td>{props.value}</td></tr>)

export default App