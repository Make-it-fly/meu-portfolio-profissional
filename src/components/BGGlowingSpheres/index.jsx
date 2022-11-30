import { useEffect, useState } from "react";
import Bubble from "./Bubble";
import StyledBGGlowingSpheres from "./style";

export default function BGGlowingSpheres({children}){

  const [speedMultiplier] = useState(10)
  const [speedMinimum] = useState(6)

  useEffect(()=>{
    function clickedBubble(e){
      console.log("clicou")
      if (!e.target.classList.contains("bubble")) {
        return
      }
      if (!e.target.classList.contains("clicked")) {
        e.target.classList.add("clicked")
        console.log(e.target.classList)
      } 
      /* else {
        e.target.classList.remove("clicked")
        console.log(e.target.classList)
      } */
    }

    window.addEventListener('mousedown', clickedBubble)
  },[])

  return (
    <StyledBGGlowingSpheres>
      <div className="app-container">
        <div className="bubbles-background" >
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
          <Bubble speedFactor={Math.random() * speedMultiplier + speedMinimum}/>
        </div>
        {children}
      </div>
    </StyledBGGlowingSpheres>
  )
}