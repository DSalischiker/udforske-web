import styled from 'styled-components';

const Container = styled.div`
width: 85%;
margin: 2em auto;
.div-feed{
    width:80%;
    margin: 0 auto;
    div{
        width:100%;
        gap:1em;
        display: flex;
        flex-wrap: wrap;
    }
    img{
        width: 300px;
    }
}
`;

export {Container};