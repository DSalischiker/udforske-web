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
  margin: 100px auto;

  @media (min-width: 400px){
    .Grid{
      display:grid;
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 700px) {
    .Grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .Grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .Item:nth-child(3) {
      grid-row: span 2;
    }
    .Item:nth-child(4) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
  .Grid {
    width: 100%;
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    grid-gap: 2em;
  }
  .Item {
    background-color: green;
    height: fit-content;
  }
`;

export { Container };
