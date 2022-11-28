import styled from "styled-components";


const StyledPageHoIAm = styled.div`

display: flex;
flex-direction: column;
gap: 20px;
height: 100%;
.content-container{
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  height: 100%;
  padding: 0 10px;  
}
section{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-content{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.profile{
  display: flex;
  gap: 20px;
  align-items: center;
  align-self: flex-start;
  flex-direction: row;
  img{
    max-width: 100px;
    border-radius: 50%;
    border: 6px solid var(--black-fixed);
  }
  .description{
    display: flex;
    flex-direction: column;
    gap: 10px;
    p{
      font-size: 14px;
      font-weight: 600;
      color: var(--gray1);
      display: flex;
      gap: 8px;
    }
  }
}
.hard-skills{
  border-radius: 13px;
  border: 2px solid var(--gray2);
  padding: 10px 20px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .skills-container{
    list-style: none;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    .skill-card{
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      border-radius: 5px;
      background-color: var(--gray3);
      ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        width: 100%;
        li{
          background-color: var(--gray1);
          color: var(--white-fixed);
          font-size: 10px;
          list-style: none;
          padding: 3px 6px;
          border-radius: 4px;
          display: inline;
          flex-grow: 0;
        }
      }
      
    }
  }
}
.sobre-mim{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.button-default{
  align-self: center;
}
@media screen and (max-width: 625px) {
  p{
    text-align: justify;
  }
  .hard-skills{
    box-sizing: border-box;
    .skills-container{
      flex-direction: column;
      width: 100%;
      .skill-card{
        ul{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          li{
          }
        }
      }
    }
  }
}
`

export default StyledPageHoIAm;
