import styled from "styled-components";

const Container = styled.div`
  section::after {
    content: "_";
    font-size: 74px;
    font-weight: 500;
    margin: 2em 0;
  }
  width: 1200px;
  max-width: 1200px !important;
  margin: 2em auto 0 auto;
  .Grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2em;
  }
  @media (max-width: 1200px){
    margin-top: 2em;
    width: 85%;
    .Grid{
      grid-template-columns: 1fr 1fr !important;
    }
  }
  @media (max-width: 736px){
    margin-top: 2em;
    width: 85%;
    .Grid{
      width: 100% !important;
      grid-template-columns: 1fr !important;
    }
  }


  .Item {
    background-color: green;
    height: fit-content;
  }
`;

export { Container };
