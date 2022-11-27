import { Link } from "react-router-dom"
import StyledPageHomePage from "./style"

export default function PageHomePage(){
  return (
    <StyledPageHomePage>
      <div className="container">
        <div className="content">
          <h1>Olá</h1>
          <h2>Eu sou Lucas Magalhães</h2>
          <p>Desenvolvedor Front End e apaixonado por tecnologia!</p>
          <Link to={"/meus-projetos"} className="button-white"> Veja meus projetos!</Link>
        </div>
      </div>
    </StyledPageHomePage>
  )
}