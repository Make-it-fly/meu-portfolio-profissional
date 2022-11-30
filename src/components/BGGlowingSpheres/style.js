import styled from "styled-components";

const StyledBGGlowingSpheres = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}
.app-container{
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 5px;
  box-sizing: border-box;
  .bubbles-background{
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    z-index: 1;
    width: 100%;
  }
  .bubbles-background span:nth-child(even){
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