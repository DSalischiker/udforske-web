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
  margin: 2em auto 0 auto;
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
  .flex-column{
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .container-mp{
    /* width: 100%; */
    display: flex;
    justify-content: flex-end;
  }
  .mp-button{
    height: 34px;
    width: 135px;
    background-color: #009ee3;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content: center;
    text-transform: capitalize !important;
    font-weight: 500;
    a{
      text-decoration: none;
      :visited{
        color: white;
      }
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
      max-width: 90%;
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
