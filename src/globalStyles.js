import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-primary: #254C84;
  --color-primary-light: #2196F3;
  --color-primary-dark: #0C192C;
  --color-secondary: #6E07F3;

  --gray1: #272727; 
  --gray2: #EBEBEB;
  --gray3: #f1f1f1;
  --white-fixed: #FFF;
  --black-fixed: #000;
  --green: #0DC143;
  --red: #ED1C24;
  --red-light: #ff5056;
  --transparent-black: #00000060;
}
body{
  min-height: 100vh;
  background-color: #0c192c;
  margin: 0;
  font-family: inter, sans-serif;
}

.button-red, .button-white, .button-default, .button-alternative-green{
  border-radius: 13px;
  padding: 5px 30px;
  font-size: 14px;
  font-family: inter, sans-serif;
  cursor: pointer;
  transition: .2s;
  text-decoration: none;
  text-align: center;
  border: transparent;
  font-weight: 500;
}
.button-white{
  background-color: var(--white-fixed);
  color: var(--color-primary-light);
}
.button-white:hover{
  color: var(--color-secondary);
}
.button-red{
  background-color: var(--red-light);
  color: var(--white-fixed);
}
.button-red:hover{
  background-color: var(--red);
}
.button-default{
  background-color: var(--color-primary);
  color: var(--white-fixed);

}
.button-default:hover{
  background-color: var(--color-primary-light);
}
.button-alternative-green{
  background-color: transparent;
  border: 3px solid var(--green);
  border-radius: 6px;

}
.container{
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  overflow: hidden;
}
h1{
  color: white;
}
h3{
  font-size: 1em;
  color: var(--color-secondary);
}
p{
  font-size: 12px;
  display: inline-block;
}

* {
  list-style: none;
}


`

export default GlobalStyle