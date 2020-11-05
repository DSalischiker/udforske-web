import { useAuth } from "lib/useUser";
import {useProtected} from 'lib/useProtected';
const Dashboard = () => {
  const auth = useProtected();
  if (!auth.user) return null;
  return (
    <div>
      <h1>Dashboard_</h1>
      {auth.user.email }
    </div>
  );
};

export default Dashboard;
