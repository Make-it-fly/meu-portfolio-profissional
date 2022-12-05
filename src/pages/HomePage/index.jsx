import { Link } from "react-router-dom"
import StyledPageHomePage from "./style"
import { FaFileDownload } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import curriculum from '../../documents/Currículo Front End.pdf'


export default function PageHomePage(){

  function downloadPdf(){

  }

  return (
    <StyledPageHomePage>
      <div className="container">
        <div className="content">
          <h1>Olá</h1>
          <h2>Eu sou Lucas Magalhães</h2>
          <p>Desenvolvedor Front End e apaixonado por tecnologia!</p>
          <ul className="social-media-buttons">
            <li><a href={"https://www.linkedin.com/in/lucas-magalh%C3%A3es-3b034120a/"} target="_blank" rel="noreferrer"><AiFillLinkedin/></a></li>
            <li><a href={"https://github.com/Make-it-fly"} target="_blank" rel="noreferrer"><BsGithub/></a></li>
          </ul>
          <div className="content-buttons">
            <Link to={"/meus-projetos"} className="button-white" id="downloadBtn" onClick={downloadPdf}> Veja meus projetos!</Link>          
            <a className="button-red" href={curriculum} download="Lucas Magalhães - Front End Curriculum"><FaFileDownload/> Currículo Download</a>
          </div>
        </div>
      </div>
    </StyledPageHomePage>
  )
}