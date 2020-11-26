import React, { useState, useEffect } from 'react';
import { db } from "lib/firebase";
import { Main } from "containers";
import { Header, Footer } from "components";
import { Container, QuoteDiv } from "./styled";
const Layout = ({ children }) => {
 /*  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({}) */
 /*  let quotes = db.collection("quotes")
queryRef = quotesRef.whereField("id", id)
                   .order("id")
                   .limit(1) */
  /* db.collection('quotes').get().then(snap => {
    const size = snap.size // will return the collection size
    const random = Math.floor(Math.random() * (size - 1)) + 1;
    console.log(random);
 }); */
/*  useEffect(() => {
  db.collection("quotes")
  .where("id" >= id)
  .order("id")
  .limit(1)
    .onSnapshot((snap) => {
      const quotesDB = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuotes(quotesDB);
      console.log("quotes", quotesDB);
    });
  // return (() => {
  //     //unsubscribe the listener here
  //     dbCall.unsubscribe()
  // })
}, []); */


  return (
    <Container>
      <Header id="top"/>
      <Main>
        {children}
        {/* <QuoteDiv>
          {randomQuote ? <p>{randomQuote.text}</p> : ''}

        </QuoteDiv> */}
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
