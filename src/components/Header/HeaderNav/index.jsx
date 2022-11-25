import { AiOutlineHome, AiOutlineFolder } from "react-icons/ai";
import { FiSmile } from "react-icons/fi";
import { BiMessageDots } from "react-icons/bi";
import StyledHeaderNav from "./style";
import { Link } from "react-router-dom";

export default function HeaderNav(){
  return (
    <StyledHeaderNav>
      <ul>
        <li>
          <AiOutlineHome className="icon"/>
          <Link to={"/"}>Página Principal</Link>
        </li>
        <li>
          <AiOutlineFolder className="icon"/>
          <Link to={"/meus-projetos"}>Meus Projetos</Link>
        </li>
        <li>
          <FiSmile className="icon"/>
          <Link to={"/quem-sou-eu"}>Quem sou eu</Link>
        </li>
        <li>
          <BiMessageDots className="icon"/>
          <Link to={"/contato"}>Contato</Link>
        </li>
      </ul>
    </StyledHeaderNav>
  )
}