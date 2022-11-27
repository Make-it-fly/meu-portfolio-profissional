import StyledProjectCardLi from "./style";


export default function ProjectCardLi({children, img, link}){
  return (
    <StyledProjectCardLi className="project-card">
      <img src={img} alt="Kenzie Hub Logo" className="project-img"/>
      <div className="project-description">
        {children}
        <button className="button-default">Ver Projeto</button>
      </div>
    </StyledProjectCardLi>
  )
}