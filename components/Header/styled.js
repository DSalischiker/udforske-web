import styled from "styled-components";

const Container = styled.div`
@media (max-width: 1000px){
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding-bottom: 1em;
    img{
        margin: 1em 0 0 !important;

    }
}
max-width: 100vw;
height: 75px;
background-color: #222222;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
/* border-bottom: 3px solid #d2e603; */
img{
    margin-left: 4em;
    width: 8em;

}
`;

export { Container };
