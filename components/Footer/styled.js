import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 1000px) {
    padding-bottom: 2em;
    margin-top: 0 !important;
    .legales {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: auto;
      margin: 0 auto;
    }
    .redes {
      margin-top: 0 !important;
    }
    p {

      margin: 0 auto 2em auto !important;
    }
    img {
      margin: 1em auto !important;
    }
  }
  margin-top: 2em;
  width: 100%;
  max-width: 100%;
  height: 200px;
  position: absolute;
  /* bottom: 0; */
  background-color: white;
  color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border-top: 3px solid #d2e603; */
  p {
    font-family: 'Open Sans', sans-serif;
    margin-right: 4em;
  }
  img {
    margin-left: 4em;
    width: 8em;
  }
  .redes-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 5em;
      margin: 0;
    }
    a {
      color: #222222;
      text-decoration: none;
    }
    .redes {
      margin-top: 1em;
      display: flex;
      gap: 0.5em;
      justify-content: space-around;
      width: 100%;
      .icon {
        font-size: 1.2em;
      }

      .instagram:hover {
        color: purple;
      }
      .behance:hover {
        color: #053eff;
      }
      .envelope:hover{
        color: #d2e603;
      }
    }
  }
  .legales {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 200px;
    a {
      text-decoration: underline;
  text-decoration-color: #d2e603;
color: #222222;
    }
  }
`;

export { Container };
