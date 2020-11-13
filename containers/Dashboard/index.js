import { useAuth } from "lib/useUser";
import {useProtected} from 'lib/useProtected';
import {QuotesForm} from 'components';
const Dashboard = () => {
  const auth = useProtected();
  if (!auth.user) return null;
  return (
    <div>
      <h1>Dashboard_</h1>
      <QuotesForm />
      {auth.user.email }
    </div>
  );
};

export default Dashboard;
