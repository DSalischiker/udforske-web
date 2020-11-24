import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html,
body {
  @font-face {
    font-family: 'Archivo', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  padding: 0;
  margin: 0;
  font-family: Open Sans, Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    h1, h2, h3, h4, h5, h6{
      font-family: 'Archivo', sans-serif;
    }
}

.inner {max-width:1200px; margin: 0 auto;}
button { width: 140px; cursor: pointer; opacity: .8; background: #fff; border:0; text-transform: uppercase; padding:20px 20px !important; color:#fff; background-color:#000; margin:0 auto;margin-left:20px; border-radius:20px; font-weight:800; text-align:center;}
button:first-child {margin-left:0;}
.red {background-color: #ff0000;}
.orange {background-color: #FF5000!important;}
.hightlight {background-color: #F0B40A; color: #320A46;}
.hightlight_over {background-color: #eee; color: #320A46;}
* {
  ::selection{
    background-color: #d2e603;
    color: #222222;
  }
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media (max-width: 860px) {
    .inner {padding:0 30px;}
}
`;
export default GlobalStyle;
