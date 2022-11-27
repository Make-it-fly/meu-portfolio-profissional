import { AiOutlineHome, AiOutlineFolder } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import StyledHeaderNav from "./style";
import { Link } from "react-router-dom";

export default function HeaderNav(){
  return (
    <StyledHeaderNav>
      <ul>
        <li>
          <Link to={"/"}>
           <AiOutlineHome className="icon"/>
            <p>Página Principal</p>
          </Link>
        </li>
        <li>
          <Link to={"/meus-projetos"}>
           <AiOutlineFolder className="icon"/>
            <p>Meus Projetos</p>
          </Link>
        </li>
        <li>
          <Link to={"/quem-sou-eu"}>
            <BsPerson className="icon"/>
            <p>Quem sou eu</p>
          </Link>
        </li>
        <li>
          <Link to={"/contato"}>
           <AiOutlineMail className="icon"/>
            <p>Contato</p>
          </Link>
        </li>
      </ul>
    </StyledHeaderNav>
  )
}