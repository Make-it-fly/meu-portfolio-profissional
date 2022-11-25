import styled from "styled-components";

const StyledBubble = styled.span`
  position: relative;
    min-width: 30px;
    height: 30px;
    background-color: #4fc3dc;
    margin: 0 4px;
    border-radius: 50px;
    box-shadow: 
      0 0 0 10px #4fc3dc44,
      0 0 50px #4fc3dc,
      0 0 100px #4fc3dc
    ;
    
  animation: animate linear infinite;
  animation-duration: ${({speedFactor}) => `${speedFactor}s`};
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