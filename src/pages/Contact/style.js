import styled from "styled-components";


const StyledPageContact = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

.button-alternative-green{
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--green);
}
.title-content{
  text-align: center;
}
.info-container{
  display: flex;
  justify-content: ${({isPortuguese} )=> isPortuguese ? 'space-between' : 'center'};
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 330px;
  .contact-info-container{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  p{
    display: flex;
    align-items: center;
    text-align: center;
    gap: 5px;
  }
  .symbol{
    font-size: 1.6em;
  }
}
@media screen and (max-width: 360px) {
    .info-container{
      flex-direction: column;
    }
  }
`

export default StyledPageContact;
