import styled from "styled-components";

const Container = styled.div`
@media(max-width: 768px){
  flex-direction: column-reverse;
  gap:1em;
  justify-content: center;
  align-items: center;
  img{
    margin-left: 0 !important;
    flex: 1;
  }
}
  @media (max-width: 1000px) {
      width: 85% !important;
    .text {
      h2 {
        font-size: 24px !important;
      }
      p {
        font-size: 14px !important;
      }
    }
    img {
      width: 50%;
      height: auto;
      margin-left: 4em;
      filter: brightness(0.95);
    }
  }
  width: 65%;
  margin: 0 auto 2em auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  .text {
    p{
      font-family: 'Open Sans', sans-serif;
    }
    h2 {

      font-size: 36px;
      margin-bottom: 0.5em;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .img {
  }
  img {
    width: 200px;
    height: auto;
    margin-left: 4em;
    filter: brightness(0.95);
  }
`;

export { Container };
