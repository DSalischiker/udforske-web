import styled from "styled-components";

const Container = styled.div`
@media (max-width: 768px){
    .header{
        flex-direction: column-reverse !important;
    }
    .country{
        width: fit-content !important;
        margin-bottom: 1em !important;
    }
}
margin: 80px auto 0 auto;
width: 70%;
display: flex;
flex-direction: column;
padding: 1em 2em;
border: 5px solid #222222;
/* background-color: #222222;
color: white; */
.flex-column{
    display:flex;
    flex-direction: column;
}
.title{
    justify-content: flex-end;
    align-items: flex-start !important;
}
.flex-row{
    display:flex;
}
.header{
    justify-content: space-between;
    margin-bottom: 2em;
}
img{
    width: 4em;
}
.country{
    align-items: center;
    padding: 0.5em;
    background-color: #222222;
    color: white;
    gap: 0.3em;
}
h1{font-size: 1.8em; font-weight: 700;}
h3{font-size: 1em; font-weight: 700; text-transform: capitalize}
p{ font-size: 0.9em; font-weight: 300; margin-bottom: 2em;}

`;

export { Container };
