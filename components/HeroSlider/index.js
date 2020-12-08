import React from "react";
import { useState, useEffect } from "react";
import { db } from "lib/firebase";
/* import { Container as SliderContainer } from "./styled"; */
import Image from "next/image";
import { Container } from "./styled";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const HeroSlider = ({ children }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    db.collection("slider")
      /* .where("id", "==", id) */
      .onSnapshot((snap) => {
        const sliderDB = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSlider(sliderDB);
        console.log("slider", sliderDB);
      });
    // return (() => {
    //     //unsubscribe the listener here
    //     dbCall.unsubscribe()
    // })
  }, []);
  return (
    <Container>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        bullets={false}
      >
        {/* Map de imgs */}
        {slider.length &&
          slider.map((slide) => {
            return <div key={slide.id} data-src={slide.url} alt={slide.alt} />;
          })}
      </AutoplaySlider>
    </Container>
  );
};

export default HeroSlider;
