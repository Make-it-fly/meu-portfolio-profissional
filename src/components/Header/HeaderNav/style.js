import styled from "styled-components";

const StyledHeaderNav = styled.nav`
  ul{
    display: flex;
    gap: 20px;
    background-color: var(--white-fixed);
    padding: 10px 50px;
    border-radius: 13px;
    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      color: var(--color-primary);
      font-weight: 600;
      cursor: pointer;
      transition: .2s;
      .icon{
        font-size: 2em;
      }
      a{
        text-decoration: none;
        color: inherit;
      }
    }
    li:hover{
      color: var(--color-secondary);
    }
  }
`
export default StyledHeaderNav