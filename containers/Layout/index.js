import React, { useState, useEffect } from 'react';
import { db } from "lib/firebase";
import { Main } from "containers";
import { Header, Footer } from "components";
import { Container, QuoteDiv } from "./styled";
const Layout = ({ children }) => {
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
        console.log(quotesDB);
      });
    // return (() => {
    //     //unsubscribe the listener here
    //     dbCall.unsubscribe()
    // })
  }, []);
  return (
    <Container>
      <Header id="top"/>
      <Main>
        {children}
        <QuoteDiv>
          {/* {quotes ? <p>{quotes[0]}</p> : ''} */}
          <p>{quotes && quotes.text}</p>
        </QuoteDiv>
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
