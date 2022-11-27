import styled from "styled-components";


const StyledPageHomePage = styled.div`
  .container{
    max-width: 620px;
    margin: 0 auto;
    .content{
      background-color: var(--transparent-black);
      border-radius: 13px;
      padding: 30px;
      color: var(--white-fixed);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
      h1{
        font-size: 6em;
      }
      h2{
        font-size: 2em;
      }
      a{
        margin-top: 30px;
        text-decoration: none;
      }
    }
  }
`

export default StyledPageHomePage;
