import styled from "styled-components";

const Container = styled.div`
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
}
h1{font-size: 1.8em; font-weight: 700;}
h3{font-size: 1em; font-weight: 700;}
p{ font-size: 0.9em; font-weight: 300; margin-bottom: 2em;}

`;

export { Container };
