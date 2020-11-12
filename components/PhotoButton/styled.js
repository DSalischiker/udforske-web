import styled from "styled-components";

const Container = styled.a`
  width: 30%;
  max-height: 70px;
  text-decoration: none;
  display: flex;
  align-items: center;
  :visited {
    color: white;
  }
  /* :hover {
    transition: transform 0.5s;
    max-height: 500px;
    img {
      height: 500px;
      object-fit: cover;
      position: relative;
      z-index: 1;
      h1 {
        font-size: 24px;
      }
    }
  } */
  img {
    height: 70px;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    filter: brightness(75%);
  }
  background: url("${(props) => props.src}");
  /* background-image: url('${(props) => props.background}');
  background-size: 100%; */

  h1 {
    position: absolute;
    z-index: 1000;
    font-size: 18px;
    font-weight: 400;
    color: white;
    margin-left: 1em;
    /* margin: 1em; */
  }
`;
export { Container };
