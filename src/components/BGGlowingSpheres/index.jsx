import { useState } from "react";
import Bubble from "./Bubble";
import StyledBGGlowingSpheres from "./style";

export default function BGGlowingSpheres({children}){

  const [speedMultiplier] = useState(10)
  const [speedMinimum] = useState(6)
  
  return (
    <StyledBGGlowingSpheres>
      <div className="app-container">
        <div className="bubbles-background">
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