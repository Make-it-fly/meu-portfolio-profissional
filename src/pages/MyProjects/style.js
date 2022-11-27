import styled from "styled-components";


const StyledPageMyProjects = styled.div`
  height: 100%;
  .projects{
    height: 100%;
    ul{
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: auto;
      height: 100%;
      padding: 0 10px;
    }
  }
  .button-default{
    font-size: 12px;
    border-radius: 5px;
  }
  @media screen and (max-width: 520px) {
    .projects{
      ul{
        padding: 5px;
      }
    }
  }
`

export default StyledPageMyProjects;
