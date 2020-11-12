import styled from "styled-components";

const Container = styled.ul`
a{
    opacity: 0.7;
    color: white;
    text-decoration:none;
}
a:hover{
    color: white !important;
    opacity: 1;
}
width: fit-content;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 2em;
li{
    cursor: pointer;
    list-style-type: none;
    color: white;
    margin-right: 2em;
}
li:hover{
    /* border-bottom: 2px solid white; */
}
li:nth-last-of-type(-n+2){
    padding: 0.5em 1em;
    border: 2px solid white;
    opacity: 0.7;
}
li:nth-last-of-type(-n+2):hover{
    background-color: white;
    opacity: 1;
    a{
        color: #222222 !important;
    }

}
li:last-of-type{
    margin-right: 0 !important;
}
a:nth-last-of-type(-n+2):hover{
    color: #222222;
}
img{
    width: 2em;
    margin-right: 4em;
}
`;

export { Container };
