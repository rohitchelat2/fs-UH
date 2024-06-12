import { useState } from 'react'
import { useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {

let color = ("#606060");

  
  const documentRef = useRef(document); 
  

  const [pos, setPos] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
  let x=0;
  let y=0; 

  function rerender() {
    let tempos = pos.slice(-10)
    
    setPos(tempos.concat(x,y))

  }

const fullScreen =
{
  height: "100vh",
  width: "100vw",
}

  documentRef.current.addEventListener("mousemove", (e) => { x = e.offsetX; y = e.offsetY; });


const cS=[];
const cSb =
{
 height: "10px",
 width: "10px",
 position: "relative",
 borderRadius: "10px",
 background: color,
}

for(let i=0;i<6;i++)
  {
    let k=i*2;
    let j=k+1;
    let m=i/5;
    cS[i]={ height: "10px",
      width: "10px",
      position: "relative",
      borderRadius: "10px",
      background: color,top: pos[j], left: pos[k], opacity: m,}
    
  }





  setTimeout(rerender,1)


  return (
    <div style={fullScreen}>
    
    
    {cS.map(value => <div style={value} />)}
    </div>
  )
}
export default App
