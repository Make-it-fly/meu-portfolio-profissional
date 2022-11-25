import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-primary: #254C84;
  --color-primary-light: #2196F3;
  --color-primary-dark: #0C192C;
  --color-secondary: #6E07F3;

  --gray1: #272727; 
  --gray2: #EBEBEB;
  --white-fixed: #FFF;
}
body{
  min-height: 100vh;
  background-color: #0c192c;
  margin: 0;
  font-family: inter;
}
h1{
  color: white;
}
`

export default GlobalStyle