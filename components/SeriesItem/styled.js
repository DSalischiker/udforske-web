import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 98%;
  .Content {
    position: relative;
    height: 100%;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  div.Overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #222222;
    overflow: hidden;
  }

  :hover .Overlay {
    opacity: 0.5;
  }
  div.Text {
    font-weight: 700;
    font-size:36px;
    font-family: 'Archivo', sans-serif;
    width: 100%;
    color: white;
    opacity: 1 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export { Container };
