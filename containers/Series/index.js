import { Container } from "./styled";
import { SeriesItem } from "components";
import { useState, useEffect } from "react";
import { db } from "lib/firebase";
import Link from "next/link";
import axios from "axios";

const Series = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    db.collection("series")
      /* .where("id", "==", id) */
      .onSnapshot((snap) => {
        const seriesDB = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSeries(seriesDB);
      });
    // return (() => {
    //     //unsubscribe the listener here
    //     dbCall.unsubscribe()
    // })
  }, []);
  return (
    <Container>
      <section>
        <div className="Grid">
          {/* ACÁ VA UN .MAP DE SERIES COLLECTION*/}
          {series.length ?
            series.map((serie) => {
              return (
                <SeriesItem
                  key={serie.id}
                  className="Item"
                  href={`/series/${serie.id}`}
                  src={serie.photos[0]}
                  name={serie.title}
                />
              );
            }): <h1 className='loading'>Cargando...</h1>}
        </div>
      </section>
    </Container>
  );
};

export default Series;
