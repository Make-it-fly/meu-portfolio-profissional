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
      .social-media-buttons{
        display: flex;
        gap: 10px;
        li{
          font-size: 28px;
          cursor: pointer;
          transition: .2s;
          a{
            color: var(--white-fixed);
          }
        }
        li:hover{
          filter: brightness(0.8);
        }
      }
      .content-buttons{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        gap: 15px;
      }
      h1{
        font-size: 6em;
      }
      h2{
        font-size: 2em;
      }
      a{
        text-decoration: none;
      }
    }
  }
`

export default StyledPageHomePage;
