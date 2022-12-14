import ContentTemplate from "../../components/ContentTemplate/index";
import myPicture from "../../images/myself.jpg"
import StyledPageHoIAm from "./style";

import { BsFillBriefcaseFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../contexts/languageContext";

export default function PageHoIAm(){
  const {isPortuguese} = useLanguageContext()
  return (
    <ContentTemplate>
      <StyledPageHoIAm>
        <div className="content-container">
          <section className="profile">
            <img src={myPicture} alt="Foto de perfil do Lucas Magalhães"></img>
            <div className="description">
              <h2>Lucas Magalhães</h2>
              <p>
                <BsFillBriefcaseFill/>
                Front end - Web Developer
              </p>
            </div>
          </section>
          <section className="hard-skills">
            <h2>Hard Skills</h2>
            <ul className="skills-container">
              <li className="skill-card">
                <h3>{isPortuguese ? "Tecnologias" : "Technologies"}</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                </ul>
              </li>
              <li className="skill-card">
                <h3>{isPortuguese ? "Bibliotecas" : "Libraries"}</h3>
                <ul>
                  <li>React</li>
                  <li>React Icons</li>
                  <li>React Router Dom</li>
                  <li>React Hook Form</li>
                  <li>Yup</li>
                  <li>Styled Components</li>
                  <li>React Calendar</li>
                  <li>Dotenv</li>
                  <li>Sucrase</li>
                  <li>Nodemon</li>
                  <li>Jsonwebtoken</li>
                  <li>Uuid</li>
                  <li>Bcryptjs</li>
                </ul>
              </li>
              <li className="skill-card">
                <h3>{isPortuguese ? "Design e Marketing" : "Design and Marketing"} </h3>
                <ul>
                  <li>FIGMA</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Premiere</li>
                  <li>Facebook Ads</li>
                  <li>Google Ads</li>
                </ul>
              </li>
            </ul>
          </section>
          <section className="soft-skills">
            <h2>Soft Skills</h2>
            <div className="text-content">
              <h3>{isPortuguese ? "Inteligência Emocional" : "Emotional Intelligence"} </h3>
              <p>{isPortuguese ? "Minha trajetória profissional foi toda construída em cima de experiências conquistadas com esforço, garra e disciplina. Tive um contato profundo com Marketing digital, Diagramação de livros e revistas como freelancer, negociação, prospecção de clientes e pressão em ambientes de trabalho. Me deparei com muitas situações onde eu tive que manter minha perseverança e minha fé intactas. Isso me permitiu desenvolver resiliência." 
              : 
              "My professional trajectory was all built on top of experiences gained with effort, determination and discipline. I had a deep contact with digital marketing, layout of books and magazines as a freelancer, negotiation, prospecting for clients and pressure in work environments. I came across many situations where I had to keep my faith. It allowed me to develop resilience."} 
              </p>
            </div>
          </section>
          <section className="sobre-mim">
              <h2>{isPortuguese ? "Sobre mim" : "About me"} </h2>
              <div className="text-content">
                <h3>{isPortuguese ? "Minha paixão" : "My Passion"} </h3>
                <p>{isPortuguese ? "Na Kenzie Academy Brasil tenho tido a oportunidade de desenvolver diversos projetos. Adquiri uma grande paixão pela área de desenvolvimento. Amo programar e aprender coisas novas." 
                : 
                "At Kenzie Academy Brasil I'm having the opportunity to develop several projects. I acquired a great passion for the development area. I love programming and learning new things."}</p>
              </div>
              <div className="text-content">
                <h3>{isPortuguese ? "Crença profissional" : "Professional Belief"} </h3>
                <p>{isPortuguese ? "Todo ser humano é capaz de adquirir qualquer conhecimento. A única variável é o tempo que cada um precisa investir." : "Every human being is capable of acquiring any knowledge. The only variable is the time each one needs to invest."} </p>
              </div>
          </section>
        </div>
        <Link to={"/contato"} className="button-default">{isPortuguese ? "Entre em contato" : "Contact me"} </Link>
      </StyledPageHoIAm>
    </ContentTemplate>
  )
}