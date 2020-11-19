import React from "react";
/* import { Container as SliderContainer } from "./styled"; */
import Image from "next/image";
import { Container } from "./styled";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const HeroSlider = ({ children }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <Container>
      <AutoplaySlider play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={5000} bullets={false}>
        <div data-src="/seriesitemprueba.jpg" alt="Recetas cruelty free" />
        <div data-src="/slider1.jpg" alt="Recetas cruelty free" />
      </AutoplaySlider>
    </Container>
  );
};

export default HeroSlider;