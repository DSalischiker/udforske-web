import styled from "styled-components";

const Container = styled.div`
width: 65%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
align-self: center;

.text{
    h2{
        font-size: 48px;
        margin-bottom: 0.5em;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
}
img{
    /* border: 2px solid #222222; */
    border-radius: 50%;
width: 200px;
height: auto;
margin-left: 4em;
filter: brightness(0.95);
}
`;

export { Container };
