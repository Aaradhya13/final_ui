import { useAuth } from "../../_context/AuthContext";
import Layout from '../home-page/HomePage';

const HomePage = () => {
  const { user, logout } = useAuth();

  return (
    // <div className="p-4 text-center">
    //   <h1>Welcome, {user?.name}</h1>
    //   <button onClick={logout} className="mt-4 p-2 bg-red-500 text-white rounded">
    //     Logout
    //   </button>
    // </div>
    <Layout></Layout>
  );
};

export default HomePage;
