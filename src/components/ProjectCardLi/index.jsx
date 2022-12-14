import { useLanguageContext } from "../../contexts/languageContext";
import StyledProjectCardLi from "./style";


export default function ProjectCardLi({children, img, link}){

  const {isPortuguese} = useLanguageContext()

  return (
    <StyledProjectCardLi className="project-card">
      <img src={img} alt="Kenzie Hub Logo" className="project-img"/>
      <div className="project-description">
        {children}
        <a href={link || "#"} target="_blank"  className="button-default" rel="noreferrer">
          {isPortuguese ? "Ver Projeto" : "Access Project"} 
        </a>
      </div>
    </StyledProjectCardLi>
  )
}