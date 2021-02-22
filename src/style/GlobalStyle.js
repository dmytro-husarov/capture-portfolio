import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: calc(10px + 2vmin);
  /* overflow-x: hidden; */
}
body {
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
  /* overflow-x: hidden; */
}
button {
  padding: 0.5rem 1rem;
  border: 3px solid #23d779;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #23d779;
    color: white;
  }
}
h2 {
  font-size: 1.5rem;
  font-weight: lighter;
}
h3 {
  color: white;
}
h4 {
  font-size: 1rem;
  font-weight: bold;
}
a {
  font-size: 1rem;
}
span {
  font-weight: bold;
  color: #23d779;
}
p {
  padding: 1rem 0;
  font-size: 1rem;
  line-height: 150%;
  color: #cccccc;
}
`

export default GlobalStyle
