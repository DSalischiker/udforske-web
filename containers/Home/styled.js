import styled from "styled-components";

const Container = styled.div`
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
    max-width: 100%;
    max-height: 90vh;
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
