import { useState } from 'react'



function App() {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(8).fill(0))
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  
  let copy = points;
  let randomnum = Math.floor(Math.random()*anecdotes.length);
  if(randomnum === selected)
    {randomnum = Math.floor(Math.random()*anecdotes.length);}
  

  const handleClick = () =>{
    setSelected(randomnum)
    setPoints(points)
    
  }

  const vote = () =>{
    
    copy[randomnum]=copy[randomnum]+1
    handleClick()

  }
  let i = points.indexOf(Math.max(...points));
  
  return (
    <>
      <div>
      <Head text="Anecdote of the day " />
      {anecdotes[randomnum]}
      <br></br>
      
      
      <div style={{position: "fixed", top: "135px", left:"10px"}}>
         
        <Button text="Next" handleClick= {handleClick}/>
        <Button text="Vote" handleClick={vote} p/>
       
        <Head text="Most voted anecdote" />
        <Text value={anecdotes[i]}/>
      </div></div>
      
    </>
  )
}

const Head = (props) => {
  return (
    <div>
      <h1> {props.text} </h1>
      
    </div>
  )
}

const Button = (props) => (<button style={props.pos} onClick={props.handleClick}>
  {props.text}
</button>)

const Text = (props) => (<p> {props.value}</p> )
export default App
