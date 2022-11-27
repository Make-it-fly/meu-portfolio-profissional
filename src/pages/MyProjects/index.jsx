import StyledPageMyProjects from "./style";
import ContentTemplate from "../../components/ContentTemplate/index";
import imgKenzieHub from "../../images/Kenzie Hub.jpg"
import imgBurguerKenzie from "../../images/Burguer kenzie.jpg"
import imgNuKenzie from "../../images/Nu Kenzie.jpg"
import ProjectCardLi from "../../components/ProjectCardLi";

export default function PageMyProjects(){
  return (
    <ContentTemplate>
      <StyledPageMyProjects>
        <section className="projects">
          <ul>
              <ProjectCardLi img={imgKenzieHub} link={"#"}>
                <h2>Kenzie Hub</h2>
                <p>KenzieHub é um projeto de fórum. Nele, os usuários podem se cadastrar e inserir tecnologias das quais estão acostumados. </p>
              </ProjectCardLi>
              <ProjectCardLi img={imgBurguerKenzie} link={"#"}>
                <h2>Nu Kenzie</h2>
                <p>Aplicação que simula um aplicativo de banco, dando ao usuário controle das suas finanças.</p>
              </ProjectCardLi>
              <ProjectCardLi img={imgNuKenzie} link={"#"}>
                <h2>Burguer Kenzie</h2>
                <p>Aplicação que simula uma aplicação para uma hamburgueria.</p>
              </ProjectCardLi>
          </ul>
        </section>
      </StyledPageMyProjects>
    </ContentTemplate>
  )
}