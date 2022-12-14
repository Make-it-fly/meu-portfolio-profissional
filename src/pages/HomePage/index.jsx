import { Link } from "react-router-dom"
import StyledPageHomePage from "./style"
import { FaFileDownload } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import curriculum_PtBR from '../../documents/Currículo Front End.pdf'
import curriculum_EnUs from '../../documents/Currículo Front End EN-US.pdf'
import { useLanguageContext } from "../../contexts/languageContext";


export default function PageHomePage(){
  const {isPortuguese} = useLanguageContext()

  return (
    <StyledPageHomePage>
      <div className="container">
        <div className="content">
          <h1>
            {isPortuguese ? "Olá" : "Hello!"}
          </h1>
          <h2>{isPortuguese ? "Eu sou Lucas Magalhães" : "I am Lucas Magalhães"}</h2>
          <p>
            {isPortuguese ? 
          "Desenvolvedor Front End e apaixonado por tecnologia!" : 
          "Front End Developer and in passion with technology!"}
          </p>
          <ul className="social-media-buttons">
            <li><a href={"https://www.linkedin.com/in/lucas-magalh%C3%A3es-3b034120a/"} target="_blank" rel="noreferrer"><AiFillLinkedin/></a></li>
            <li><a href={"https://github.com/Make-it-fly"} target="_blank" rel="noreferrer"><BsGithub/></a></li>
          </ul>
          <div className="content-buttons">
            <Link to={"/meus-projetos"} className="button-white"> 
              {isPortuguese ? "Veja meus projetos!" : "Look at my projects!"}
            </Link>          
            <a className="button-red" href={isPortuguese ? curriculum_PtBR : curriculum_EnUs} download="Lucas Magalhães - Front End Curriculum"><FaFileDownload/> 
              {isPortuguese ? "Currículo Download" : "Download Curriculum"}
            </a>
          </div>
        </div>
      </div>
    </StyledPageHomePage>
  )
}