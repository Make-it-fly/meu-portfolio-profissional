import ContentTemplate from "../../components/ContentTemplate/index";
import myPicture from "../../images/myself.jpg"
import StyledPageHoIAm from "./style";

import { BsFillBriefcaseFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

export default function PageHoIAm(){
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
                <h3>Linguagens</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </li>
              <li className="skill-card">
                <h3>Bibliotecas</h3>
                <ul>
                  <li>React</li>
                  <li>React Router Dom</li>
                  <li>React Hook Form</li>
                  <li>Yup</li>
                  <li>Styled Components</li>
                  <li>React Calendar</li>
                </ul>
              </li>
              <li className="skill-card">
                <h3>Design e Marketing</h3>
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
              <h3>Inteligência Emocional</h3>
              <p>Minha trajetória profissional foi toda construída em cima de experiências conquistadas com esforço, garra e disciplina. 
              Tive um contato profundo com Marketing digital, Diagramação de livros e revistas como freelancer, negociação, prospecção de clientes e pressão em ambientes de trabalho.
              Me deparei com muitas situações onde eu tive que manter minha perseverança e minha fé intactas. Isso me permitiu desenvolver resiliência
              </p>
            </div>
          </section>
          <section className="sobre-mim">
              <h2>Sobre mim</h2>
              <div className="text-content">
                <h3>Minha paixão</h3>
                <p>Minha grande paixão tem sido o meu estudo para o desenvolvimento de aplicativos web e práticas front end. Me encontrei desenvolvendo um desejo voraz de conhecimento por esse universo, algo que eu nunca tinha experimentado antes. Desde então, venho buscando oportunidades que me agreguem em desafios e conhecimentos.</p>
              </div>
              <div className="text-content">
                <h3>Crença profissional</h3>
                <p>Acredito que o ambiente de trabalho é mais produtivo quando simpático. Sob essa crença, resolvi assumir uma postura refletida por princípios, contagiando meus colegas com uma rotina construtiva.
                Todo ser humano é capaz de adquirir qualquer conhecimento. A única variável é o tempo que cada um precisa investir.</p>
              </div>
          </section>
        </div>
        <Link to={"/contato"} className="button-default">Entre em contato</Link>
      </StyledPageHoIAm>
    </ContentTemplate>
  )
}