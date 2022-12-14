import ContentTemplate from "../../components/ContentTemplate";
import StyledPageContact from "./style";
import { RiWhatsappFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import { useLanguageContext } from "../../contexts/languageContext";

export default function PageContact(){
  const {isPortuguese} = useLanguageContext()
  return (
    <ContentTemplate>
      <StyledPageContact>
        <div className="title-content">
          <h2>{isPortuguese ? "Vamos nos falar um pouco?" : "Let's talk?"} </h2>
          <p>{isPortuguese ? "Quer tirar alguma dúvida, ou só bater um papo? Só chamar!" : "Want to ask a question, or just have a chat? Just call!"} </p>
        </div>
        <div className="info-container">
          <div className="contact-info-container">
            <p><GrMail className="symbol"/> lucoder618@gmail.com</p>
            <p><RiWhatsappFill className="symbol"/>{isPortuguese ? "(24) 9 8101-7270" : "+5524981017270"}</p>
          </div>
          <a target="_blank" rel="noreferrer" className="button-alternative-green" href="https://api.whatsapp.com/send?phone=5524981017270&text=Ol%C3%A1%20Lucas!%20Vi%20o%20seu%20portfolio."><RiWhatsappFill/>{isPortuguese ? "Mandar um zap" : "WhatsApp"}</a>
        </div>
      </StyledPageContact>
    </ContentTemplate>
  )
}