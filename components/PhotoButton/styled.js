import styled from "styled-components";
import { motion } from 'framer-motion';
const Container = styled(motion.a)`
@media (max-width: 1000px){
  width: 80% !important;
  max-height: none;
  margin-bottom: 3em;
}
  width: 30%;
  max-height: 70px;
  text-decoration: none;
  display: flex;
  align-items: center;
  :visited {
    color: white;
  }
  img {
    height: 70px;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    filter: brightness(75%);
  }

  h1 {
    position: absolute;
    z-index: 1000;
    font-size: 18px;
    font-weight: 400;
    color: white;
    margin-left: 1em;
    /* margin: 1em; */
  }
`;
export { Container };
