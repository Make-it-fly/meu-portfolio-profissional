import { AiOutlineHome, AiOutlineFolder } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import StyledHeaderNav from "./style";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../../contexts/languageContext";

export default function HeaderNav(){
  const {isPortuguese, setIsPortuguese} = useLanguageContext()
  return (
    <StyledHeaderNav>
      <ul>
        <li>
          <Link to={"/"}>
           <AiOutlineHome className="icon"/>
            <p>{isPortuguese ? "Página Principal" : "Homepage"}</p>
          </Link>
        </li>
        <li>
          <Link to={"/meus-projetos"}>
           <AiOutlineFolder className="icon"/>
            <p>{isPortuguese ? "Meus Projetos" : "My Projects"}</p>
          </Link>
        </li>
        <li>
          <Link to={"/quem-sou-eu"}>
            <BsPerson className="icon"/>
            <p>{isPortuguese ? "Quem sou eu" : "Who am I"}</p>
          </Link>
        </li>
        <li>
          <Link to={"/contato"}>
           <AiOutlineMail className="icon"/>
            <p>{isPortuguese ? "Contato" : "Contact"} </p>
          </Link>
        </li>
        <li>
          <button className="btn-change-language" onClick={()=>{
            isPortuguese ? setIsPortuguese(false) : setIsPortuguese(true)
            }}>
            <FaLanguage className="icon"/>
            <p>{isPortuguese ? "PT-BR" : "EN-US"} </p>
          </button>
        </li>
      </ul>
    </StyledHeaderNav>
  )
}