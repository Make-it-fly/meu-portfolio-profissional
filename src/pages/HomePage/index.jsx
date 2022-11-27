import { Link } from "react-router-dom"
import StyledPageHomePage from "./style"
import { FaFileDownload } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';


export default function PageHomePage(){
  return (
    <StyledPageHomePage>
      <div className="container">
        <div className="content">
          <h1>Olá</h1>
          <h2>Eu sou Lucas Magalhães</h2>
          <p>Desenvolvedor Front End e apaixonado por tecnologia!</p>
          <ul className="social-media-buttons">
            <li><a href={"https://www.linkedin.com/in/lucas-magalh%C3%A3es-3b034120a/"} target="_blank"><AiFillLinkedin/></a></li>
            <li><a href={"https://github.com/Make-it-fly"} target="_blank" ><BsGithub/></a></li>
          </ul>
          <Link to={"/meus-projetos"} className="button-white"> Veja meus projetos!</Link>
          <button className="button-red"><FaFileDownload/> Currículo Download</button>
        </div>
      </div>
    </StyledPageHomePage>
  )
}