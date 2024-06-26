import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  :root {
--ns-background-color: #F03F3B;
--ns-second-background-color: #0957C3;
--ns-third-background-color: #103931;

--ns-button-background-color: #F03F3B;
--ns-text-color: #FBFBFB;

  --pr-background-color: #ffffff;
  --pr-text-color: #8a8a89;
  
  --pr-input-background-color: #f7f7fb;
  
  --hovered-button-background-color: #0b44cd;
  /* --font-family: "Manrope", sans-serif; */
  --second-family: "Inter", sans-serif;
  :root {
  --font-family: "Helvetica Neue", sans-serif;
}
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', "Manrope"
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

     box-sizing: border-box;
     padding: 0;
     padding-bottom: 60px;
     margin: 0;
  }

 
  /* body.openModal {
    overflow: hidden;
  } */


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  padding: 0;
  margin: 0;
}

a,
button {
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  color: inherit;
  background: none;
}

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;
