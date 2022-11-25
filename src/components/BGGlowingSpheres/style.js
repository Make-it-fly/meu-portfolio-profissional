import styled from "styled-components";

const StyledBGGlowingSpheres = styled.div`
:root{
  --i: 2
}
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}
.container{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .bubbles{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;
  }
  .bubbles span:nth-child(even){
    background-color: #ff2d75;
    box-shadow: 
      0 0 0 10px #ff2d7544,
      0 0 50px #ff2d75,
      0 0 100px #ff2d75
    ;
  }

}
`
export default StyledBGGlowingSpheres