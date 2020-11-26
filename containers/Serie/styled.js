import styled from "styled-components";

const Container = styled.div`

  section::after {
    content: "_";
    font-size: 74px;
    font-weight: 500;
    margin: 2em 0;
  }
  width: 85%;
  max-width: 1200px !important;
  margin: 100px auto 0 auto;
  .series-title{
    font-size:36px;
    margin: 0 auto 1em auto;
    width: 100%;
    text-align: center;
    svg{
      width:0.8em;
      margin-left: 0.3em;
      margin-bottom: 0.2em;
    }
  }

  .img-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap:2em;
    img{
      width:auto;
      max-height: 80vh;
      max-width: 1000px;
    }
  }
  .Grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    grid-gap: 2em;
  }
  .masonry{
    /* max-width: 80vw !important; */
  }
  .Vertical {
    width:50%;
  }
  .Horizontal {
    width: 100%;
  }
`;

export { Container };
