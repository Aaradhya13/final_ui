import { useAuth } from "../../_context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const fakeUser = { name: "John Doe", email: "john@example.com" };
    login(fakeUser);
  };

  return (
    <div className="p-4 text-center">
      <h1>Login Page</h1>
      <button onClick={handleLogin} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
