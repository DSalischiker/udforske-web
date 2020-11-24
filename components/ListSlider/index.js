import { useState, useEffect } from "react";
import { db } from "lib/firebase";
import Link from "next/link";
import axios from "axios";
import { Container } from "./styled";

const ListSlider = ({ id }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    db.collection("slider")
      /* .where("id", "==", id) */
      .onSnapshot((snap) => {
        const slidesDB = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSlides(slidesDB);
        console.log(slidesDB);
      });
    // return (() => {
    //     //unsubscribe the listener here
    //     dbCall.unsubscribe()
    // })
  }, []);


  const handleDelete = async (id) => {
    try {
      const res = await axios.post("/api/slider/delete", { id });
      const data = await res.data;
      console.log(res.status);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  return (
    <Container>
        <h2>Lista de Slides</h2>
      <ul>
        {slides &&
          slides.map(({ id, url }) => (
            <li key={id}>
              <div className="flex-container">
                    <img src={url} alt={`img-${id}`}/>
                <div className="buttons">
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>

              </div>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default ListSlider;
