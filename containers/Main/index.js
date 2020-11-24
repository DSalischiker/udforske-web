import { Container, QuoteDiv } from "./styled";

const Main = ({ children }) => {
  /* const [quotes, setQuotes] = useState([]); */
  /* db.collection('quotes').get().then(snap => {
    const size = snap.size // will return the collection size
    const random = Math.floor(Math.random() * (size - 1)) + 1;
    console.log(random);
 }); */
  /* useEffect(() => {
    db.collection("quotes")
      .whereField("random", (random))
      .order("random")
      .limit(1)
      .onSnapshot((snap) => {
        const quotesDB = snap.docs.map((doc) => ({
          id: doc.id,

          ...doc.data(),
        }));
        setSeries(quotesDB);
        console.log("quotes", quotesDB);
      });

  }, []); */
  return (
    <Container>
      {children}
      <QuoteDiv></QuoteDiv>
    </Container>
  );
};

export default Main;
