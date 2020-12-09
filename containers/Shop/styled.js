import styled from 'styled-components';

const Container = styled.div`
width: 100%;
margin: 0 auto 100px auto;
.comprar{
    background-image: url("https://firebasestorage.googleapis.com/v0/b/udforske-f73ff.appspot.com/o/images%2Fweb.jpg?alt=media&token=6545448d-f54f-4aaf-8bf3-6be7c93f2f45");
    height: calc(100vh - 75px) !important;
    max-height: calc(100vh - 75px) !important;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

img{
    width: 100%;
    max-height: calc(100vh - 75px) !important;
    object-fit: contain;
}
.container-mp{
    /* width: 100%; */
    width: fit-content;
    max-width: 80%;
    height: fit-content;
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    margin: 0 auto 2em auto;
    justify-content: center;
    align-items: center;
    background-color: rgba(34,34,34,0.6);

    /* justify-content: flex-end; */
    p{
        color: white;
        text-align: center;
        line-height: 1.5em;
    }
  }

  .mp-button{
      margin: 1em auto 1em auto;
    height: 34px;
    width: fit-content;
    background-color: #009ee3;
    opacity: 1;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content: center;
    text-transform: capitalize !important;
    font-weight: 700;
    a{
      text-decoration: none;
      :visited{
        color: white;
      }
    }
  }
`;

export {Container};