import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ users, setLoggedIn, loggedIn, setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setLoggedIn(true);
      setForgetPassword(false);
      setCurrentUser(user);
      navigate("/profile");
    } else {
      toast("Invalid email or password.");
      setForgetPassword(true);
    }
  };

  return (
    <section className="py-16 bg-white sm:w-4/6 m-auto">
      <div className="max-w-6xl mx-auto px-4 ">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Login
        </h1>
        <form
          className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 cursor-pointer bg-green-800 text-white rounded-lg hover:bg-green-700"
          >
            Login
          </button>
          {forgetPassword && (
            <div className="flex justify-around text-blue-500 mt-5">
              <a className="hover:text-indigo-800 hover:underline" href="#forgetPassword">Forget Password</a>
              <a className="hover:text-indigo-800 hover:underline" href="/register">Register</a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Login;
