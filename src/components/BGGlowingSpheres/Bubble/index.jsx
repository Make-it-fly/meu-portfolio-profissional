import { useState } from "react";
import StyledBubble from "./style";

export default function Bubble({speedFactor}){

  const [clickState, setClickState] = useState(false)

  return (
    <StyledBubble onMouseDown={()=>{
      if (clickState) {
        setClickState(false) 
      }else{
        setClickState(true)
      }
    }} clickState={clickState} speedFactor={speedFactor} className="bubble"/>
  )
}