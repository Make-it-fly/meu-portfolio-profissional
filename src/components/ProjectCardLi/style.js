import styled from "styled-components";


const StyledProjectCardLi = styled.li`
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 3px solid var(--gray2);
  border-radius: 10px;
  .project-img{
    max-height: 100px;
  }
  .project-description{
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    align-items: flex-start;
    p{
      min-height: 3em;
    }
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    .project-img{
      max-width: 100px;
    }
    .project-description{
      h2{
        align-self: center;
      }
      p{
        text-align: justify;
      }
    }
    .button-default{
      align-self: center;
    }
  }
`

export default StyledProjectCardLi