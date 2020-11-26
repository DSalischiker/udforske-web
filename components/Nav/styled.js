import styled from "styled-components";

const Container = styled.ul`
@media (max-width: 1000px){
    .ico{
        display:none;
    }
    .separador{
        display:none;
    }
    margin: 1em auto;
    padding: 0 0.5em;
    gap:1em;
    flex-wrap: wrap;
    justify-content: center;
}
a{
    font-family: 'Open Sans', sans-serif;
    opacity: 0.7;
    color: white;
    text-decoration:none;
}
a:hover{
    color: #d2e603 !important;
    opacity: 1;
}
width: fit-content;
display: flex;
justify-content: space-between;
gap:2em;
align-items: center;
margin-right: 2em;
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
    width: 100px;
  top: 100%;
  left: 50%;
  margin-left: -50px; /* Use half of the width (120/2 = 60), to center the tooltip */
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  font-size: 12px;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
li{
    cursor: pointer;
    list-style-type: none;
    color: white;

}
li:hover{
    /* border-bottom: 2px solid white; */
}
.separador{
    border: 1px solid white;
    background-color: white;
    opacity: 0.7;
    height: 20px;
    width: 2px;
}
/* li:nth-last-of-type(-n+2){
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
} */
img{
    width: 2em;
    margin-right: 4em;
}
`;

export { Container };
