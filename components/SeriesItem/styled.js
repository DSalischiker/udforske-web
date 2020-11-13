import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  .Content {
    position: relative;
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
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #222222;
  }

  :hover .Overlay {
    opacity: 0.5;
  }
  div.Text {
    color: white;
    opacity: 1 !important;
    font-size: 20px;
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
