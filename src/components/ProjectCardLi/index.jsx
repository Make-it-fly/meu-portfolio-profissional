import StyledProjectCardLi from "./style";


export default function ProjectCardLi({children, img, link}){
  return (
    <StyledProjectCardLi className="project-card">
      <img src={img} alt="Kenzie Hub Logo" className="project-img"/>
      <div className="project-description">
        {children}
        <a href={link || "#"} target="_blank"  className="button-default" rel="noreferrer">Ver Projeto</a>
      </div>
    </StyledProjectCardLi>
  )
}