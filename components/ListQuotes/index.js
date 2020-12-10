import { useState, useEffect } from "react";
import { db } from "lib/firebase";
import axios from "axios";
import { EditQuoteForm } from "components";
import { Container } from "./styled";

const ListQuotes = ({ id }) => {
  const [quotes, setQuotes] = useState([]);
  const [quoteToEdit, setQuoteToEdit] = useState("");

  useEffect(() => {
    db.collection("quotes")
      /* .where("id", "==", id) */
      .onSnapshot((snap) => {
        const quotesDB = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuotes(quotesDB);
      });
    // return (() => {
    //     //unsubscribe the listener here
    //     dbCall.unsubscribe()
    // })
  }, []);

  const handleEdit = async (id) => {
    setQuoteToEdit(id);
  };

  const handleEditFormClose = () => {
    setQuoteToEdit("");
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.post("/api/quotes/delete", { id });
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
      <h2>Lista de Quotes</h2>
      <ul>
        {quotes &&
          quotes.map(({ id, text, author }) => (
            <li key={id}>
              <div className="flex-container">
                <p>
                  <em>{text}</em> - {author}
                </p>
                <div className="buttons">
                  <button onClick={() => handleEdit(id)}>Edit</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
              </div>
              {id === quoteToEdit && (
                <EditQuoteForm
                  values={{ id, text, author }}
                  handleEditFormClose={handleEditFormClose}
                />
              )}
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default ListQuotes;
