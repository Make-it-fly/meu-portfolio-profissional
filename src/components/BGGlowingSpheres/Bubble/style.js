import styled from "styled-components";

const StyledBubble = styled.span`
  ${({clickState})=>{
    if (clickState) {
      return `
      background-color: #0DAD48 !important;
      box-shadow: 
      0 0 0 10px #0DAD4844,
      0 0 50px #0DAD48,
      0 0 100px #0DAD48 !important;
      `
    } else {
     return `
      background-color: #4fc3dc;
      box-shadow: 
        0 0 0 10px #4fc3dc44,
        0 0 50px #4fc3dc,
        0 0 100px #4fc3dc
      ;
     `
    }
  }};
  position: relative;
  min-width: 50px;
  height: 50px;
  margin: 0 4px;
  border-radius: 50px;
  animation: animate linear infinite;
  animation-duration: ${({speedFactor}) => `${speedFactor}s`};
  cursor: pointer;
  transition: 0.5s;

  @keyframes animate {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translateY(-20vh) scale(1);
    }
  }
`

export default StyledBubble