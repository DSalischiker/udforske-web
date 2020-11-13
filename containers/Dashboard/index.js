import { useAuth } from "lib/useUser";
import { useProtected } from "lib/useProtected";
import { QuotesForm, ListQuotes } from "components";
import { Container } from './styled'
const Dashboard = () => {
  const auth = useProtected();
  if (!auth.user) return null;
  return (
    <Container>
      <h1>Dashboard_</h1>
      <p>{auth.user.email}</p>
      <section className='form'>
        <QuotesForm />
        <ListQuotes/>
      </section>

    </Container>
  );
};

export default Dashboard;
