import React from "react";
/* import { Container as SliderContainer } from "./styled"; */
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { Container } from "./styled";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const HeroSlider = ({ children }) => {
  return (
    <Container>
      {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={75}
        isIntrinsicHeight={false}
        visibleSlides={1}
        step={1}
        totalSlides={3}
        className="carousel-provider"
      >
        <Slider className="slider">
          <Slide classname="slide-container" index={0}>
            <Image
              className="slider-image"
              src="/slider1.jpg"
              alt="Picture of the author"
              width={1000}
              layout="fill"
              height={500}
            />
          </Slide>
          <Slide classname="slide-container" index={1}>
            I am the second Slide.
          </Slide>
          <Slide classname="slide-container" index={2}>
            I am the third Slide.
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}

      <AwesomeSlider>
        <div data-src="/seriesitemprueba.jpg" alt="Recetas cruelty free" />
        <div data-src="/slider1.jpg" alt="Recetas cruelty free" />
      </AwesomeSlider>
    </Container>
  );
};

export default HeroSlider;
