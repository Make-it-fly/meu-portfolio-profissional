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
          <div className="projects-description">
            <h2>Meus projetos</h2>
            <p>Todos os projetos aqui listados foram criados com objetivo exclusivamente educacional.</p>
          </div>
          <ul>
              <ProjectCardLi img={imgKenzieHub} link={"https://react-entrega-kenzie-hub-make-it-90zjidib9-lucas-nu-kenzie.vercel.app/"}>
                <h2>Kenzie Hub</h2>
                <p>KenzieHub é um projeto de fórum. Nele, os usuários podem se cadastrar e inserir tecnologias das quais estão acostumados. </p>
              </ProjectCardLi>
              <ProjectCardLi img={imgBurguerKenzie} link={"https://nu-kenzie-lucas-magalh-es-2sbe-hl0s04rsc-lucas-nu-kenzie.vercel.app/"}>
                <h2>Nu Kenzie</h2>
                <p>Aplicação que simula um aplicativo de banco, dando ao usuário controle das suas finanças.</p>
              </ProjectCardLi>
              <ProjectCardLi img={imgNuKenzie} link={"https://react-entrega-s1-hamburgueria-da-kenzie-make-it-fly-lqwo9pi9v.vercel.app/"}>
                <h2>Burguer Kenzie</h2>
                <p>Aplicação que simula uma aplicação para uma hamburgueria.</p>
              </ProjectCardLi>
          </ul>
        </section>
      </StyledPageMyProjects>
    </ContentTemplate>
  )
}