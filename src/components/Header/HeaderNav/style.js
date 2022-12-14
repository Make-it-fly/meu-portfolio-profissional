import styled from "styled-components";

const StyledHeaderNav = styled.nav`
  width: 100%;
  max-width: 620px;
  ul{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    background-color: var(--white-fixed);
    padding: 10px 50px;
    border-radius: 13px;
    z-index: 10;
    position: relative;
    li {
      list-style: none;
      gap: 5px;
      color: var(--color-primary);
      font-weight: 600;
      cursor: pointer;
      transition: .5s;
      .icon{
        font-size: 2em;
      }
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: inherit;
        font-size: 14px;
      }
      .btn-change-language{
        color: var(--color-secondary) !important;
        font-weight: 600;
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: inherit;
        font-size: 14px;
        cursor: pointer;
      }
    }
    li:hover{
      color: var(--color-secondary);
    }
  }
  @media screen and (max-width: 520px) {
    li{
      a{
        p{
          display: none;
        }
      }
      .btn-change-language{
        p{
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    ul{
      padding: 5px 20px;
    }
  }
`
export default StyledHeaderNav