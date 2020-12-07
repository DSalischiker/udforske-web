import styled from 'styled-components';

const Container = styled.div`
width: 85%;
  max-width: 1200px !important;
  margin: 2em auto 0 auto;
.div-marker{
    margin-top: -50px !important;
    margin-left: -50px !important;
    margin: 0 auto;
    background-color: white;
width: 100px;
height: 100px;
    max-width:100px !important;
    max-height: 100px !important;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-marker{
    padding: 0.4em;
    width: 100px;
height: 100px;
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
    /* border: 3px solid #222222; */
}
.click{
    margin: 2em auto;
    width: fit-content;
}
section::after {
    content: "_";
    font-size: 74px;
    font-weight: 500;
    margin: 2em 0;
  }
`;

export {Container};