import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHomePage from "../pages/HomePage";
import PageMyProjects from "../pages/MyProjects";
import PageHoIAm from "../pages/HoIAm";
import PageContact from "../pages/Contact";
import Header from '../components/Header';


export default function AppRoutes(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<PageHomePage/>}></Route>
        <Route path={"/meus-projetos"} element={<PageMyProjects/>}></Route>
        <Route path={"/quem-sou-eu"} element={<PageHoIAm/>}></Route>
        <Route path={"/contato"} element={<PageContact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}