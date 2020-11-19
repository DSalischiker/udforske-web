import { Container } from "./styled";
import { SeriesData } from "components";
import { useState, useEffect } from "react";
import { db } from "lib/firebase";
import Link from "next/link";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Serie = ({props}) => {
  console.log(props);
  const [serie, setSerie] = useState({});
  /* useEffect(() => {
    db.collection("series")
      .where("id", "==", key)
      .onSnapshot((snap) => {
        const serieDB = snap.docs.map((doc) => ({
          id: doc.id,

          ...doc.data(),
        }));
        setSerie(serieDB);
        console.log("serie", seriesDB);
      });
    // return (() => {
    //     //unsubscribe the listener here
    //     dbCall.unsubscribe()
    // })
  }, {}); */
  return (
    <Container>
      <section>
        {/* <div className='masonry'> */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {/* MAP DE IMÁGENES */}
            <img src={props.image} alt={`img${props.id}`}/>
            {/* <img className="Horizontal" src="/seriesitemprueba.jpg" />
            <img className="Vertical" src="/seriesitemprueba1.png" />
            <img className="Vertical" src="/seriesitemprueba1.png" />
            <img className="Horizontal" src="/seriesitemprueba.jpg" />
            <img className="Horizontal" src="/seriesitemprueba.jpg" />
            <img className="Vertical" src="/seriesitemprueba1.png" />
            <img className="Horizontal" src="/seriesitemprueba.jpg" /> */}
          </Masonry>
        </ResponsiveMasonry>
        {/* </div> */}
      </section>
      <section>
        <SeriesData
          place={props.location.name}
          region={props.location.region}
          countryName={props.countryObj.name}
          countryFlag={props.countryObj.flag}
          description={props.desc}
          date={props.date}
        />
      </section>
    </Container>
  );
};

export default Serie;
