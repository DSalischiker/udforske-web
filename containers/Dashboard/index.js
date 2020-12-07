import { useAuth } from "lib/useUser";
import { useProtected } from "lib/useProtected";
import { QuotesForm, ListQuotes, SeriesForm, ListSeries, SliderForm, ListSlider } from "components";
import { Container } from "./styled";
const Dashboard = () => {
  const auth = useProtected();
  if (!auth.user) return null;
  console.log(auth.user)
  return (
    <Container>
      <h1>Dashboard_</h1>
      <p>{auth.user.email}</p>
      <section className="form">
        <SliderForm userId={auth.user.id}/>
        <ListSlider/>
      </section>
      <section className="form">
        <QuotesForm userId={auth.user.id}/>
        <ListQuotes />
      </section>

      <section className="form">
        <SeriesForm userId={auth.user.id}/>
        <ListSeries />
      </section>
    </Container>
  );
};

export default Dashboard;
