import React, { useState, useEffect } from 'react';
import { db } from "lib/firebase";
import { Main } from "containers";
import { Header, Footer } from "components";
import { Container, QuoteDiv } from "./styled";
const Layout = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

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
        {/* <QuoteDiv>
          <em>"{quotes.length && quotes[Math.floor(Math.random() * quotes.length)].text}"</em>
        </QuoteDiv> */}
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
