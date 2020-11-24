import styled from "styled-components";

const Container = styled.div`
@media(max-width: 1000px){
  div.Index-Container {
    margin: 1em auto 0 auto !important;
    width: 100% !important;
    display: flex;
    flex-direction: column;
  }
  div.PhotoButtons-Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 75px auto 0 auto;
    width: 100% !important;
  }
  section{
    width: 90%;
    margin: 0 auto;
  }
}
  /* max-width: 100% !important;
  margin: 0;
  padding: 0; */
  section::after {
    content: "_";
    font-size: 74px;
    font-weight: 500;
    margin: 2em 0;
  }
  div.Hero-Container {
    max-width: 100vw;
    max-height: (100vh - 75px) !important;
  }
  div.Index-Container {
    margin: 100px auto 0 auto !important;
    width: 1200px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
  }
  div.PhotoButtons-Container {
    display: flex;
    justify-content: space-between;
    margin-top: 75px;
    width: 1200px;
    max-width: 1200px;
  }
  .spotify{
    display: flex;
    flex-direction: column;
  }
  iframe{
    width: 60%;
    margin: 2em auto 0 auto;
  }
`;
const Img = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 90vh;
  object-fit: fill;
`;
/* const Content = styled.div`
  width: 1200px;
  max-width: 1200px;
`; */
export { Container, Img };
