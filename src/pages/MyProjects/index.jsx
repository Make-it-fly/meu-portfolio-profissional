import StyledPageMyProjects from "./style";
import ContentTemplate from "../../components/ContentTemplate/index";
import imgKenzieHub from "../../images/Kenzie Hub.jpg"
import imgBurguerKenzie from "../../images/Burguer kenzie.jpg"
import imgNuKenzie from "../../images/Nu Kenzie.jpg"
import ProjectCardLi from "../../components/ProjectCardLi";
import { useLanguageContext } from "../../contexts/languageContext";

export default function PageMyProjects(){

  const {isPortuguese} = useLanguageContext()

  return (
    <ContentTemplate>
      <StyledPageMyProjects>
        <section className="projects">
          <div className="projects-description">
            <h2>
              {isPortuguese ? "Meus projetos" : "My Projects"}
            </h2>
            <p>
              {isPortuguese ? "Todos os projetos aqui listados foram criados com objetivo exclusivamente educacional." : "All the projects listed here were created with the purpose of education and practice."}
              
            </p>
          </div>
          <ul>
              <ProjectCardLi img={imgKenzieHub} link={"https://react-entrega-kenzie-hub-make-it-90zjidib9-lucas-nu-kenzie.vercel.app/"}>
                <h2>Kenzie Hub</h2>
                <p> {isPortuguese ? "KenzieHub é um projeto de fórum. Nele, os usuários podem se cadastrar e inserir tecnologias das quais estão acostumados." : "KenzieHub is a forum project. In it, users can register and enter the technologies they are familiar with."}  </p>
              </ProjectCardLi>
              <ProjectCardLi img={imgNuKenzie} link={"https://nu-kenzie-lucas-magalh-es-2sbe-hl0s04rsc-lucas-nu-kenzie.vercel.app/"}>
                <h2>Nu Kenzie</h2>
                <p> {isPortuguese ? "Aplicação que simula um aplicativo de banco, dando ao usuário controle das suas finanças." : "Application that simulates a bank app, giving the user control of their finances."} </p>
              </ProjectCardLi>
              <ProjectCardLi img={imgBurguerKenzie} link={"https://react-entrega-s1-hamburgueria-da-kenzie-make-it-fly-lqwo9pi9v.vercel.app/"}>
                <h2>Burguer Kenzie</h2>
                <p> {isPortuguese ? "Aplicação que simula uma aplicação para uma hamburgueria." : "Application that simulates an application for a hamburger shop."} </p>
              </ProjectCardLi>
          </ul>
        </section>
      </StyledPageMyProjects>
    </ContentTemplate>
  )
}