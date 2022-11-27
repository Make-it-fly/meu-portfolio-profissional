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
.info-container{
  display: flex;
  justify-content: space-between;
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
    gap: 5px;
  }
  .symbol{
    font-size: 1.6em;
  }
}
`

export default StyledPageContact;
