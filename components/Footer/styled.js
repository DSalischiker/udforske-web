import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 200px;
position: absolute;
bottom: 0;
background-color: white;
color: #222222;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* border-top: 3px solid #d2e603; */
p{
    margin-right: 4em;
}
img{
    margin-left: 4em;
    width: 8em;
}
.redes-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width:4em;
        margin: 0;
    }
    a{
        color: #222222;
    text-decoration:none;
    }
    .redes{
        margin-top: 1em;
        display: flex;
        justify-content: space-around;
        width: 100%;
        .icon{
            font-size: 1.2em;
        }

        .instagram:hover{
            color: purple;

        }
        .behance:hover{
            color: #053eff;
        }
    }
}
.legales{
    display: flex;
    justify-content: space-between;
align-items: center;
width: 100vw;
height: 200px;

}
`;

export { Container };
