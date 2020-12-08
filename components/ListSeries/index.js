import { useState, useEffect } from "react";
import { db } from "lib/firebase";
import Link from "next/link";
import axios from "axios";
import { EditSeriesForm } from "components";
import { Container } from "./styled";

const ListSeries = ({ id }) => {
  const [series, setSeries] = useState([]);
  const [serieToEdit, setSerieToEdit] = useState("");

  useEffect(() => {
    db.collection("series")
      /* .where("id", "==", id) */
      .onSnapshot((snap) => {
        const seriesDB = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSeries(seriesDB);
        console.log(seriesDB);
      });
    // return (() => {
    //     //unsubscribe the listener here
    //     dbCall.unsubscribe()
    // })
  }, []);

  const handleEdit = async (id) => {
    setSerieToEdit(id);
  };

  const handleEditFormClose = () => {
    setSerieToEdit("");
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.post("/api/series/delete", { id });
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
      <h2>Lista de Series</h2>

      <ul>
        {series &&
          series.map(
            ({ id, title, countryName, photos, desc, location, date }) => (
              <li key={id}>
                <div className="flex-container">
                  <div className="data">
                    <h3>{title}</h3>
                    <img src={photos[0]} alt={`img-${title}`} />
                    <span>{location.name}</span>
                    <span>{date}</span>
                  </div>
                  <div className="buttons">
                    {/* <button onClick={() => handleEdit(id)}>Edit</button> */}
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </div>
                </div>
                {/* {id === serieToEdit && (
                  <EditSeriesForm
                    values={{ id, title, countryName, photos, desc, location, date }}
                    handleEditFormClose={handleEditFormClose}
                  />
                )} */}
              </li>
            )
          )}
      </ul>
    </Container>
  );
};

export default ListSeries;
