import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { isUserAuthenticated, setIsUserAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const loginUser = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (email === "") {
      toast.error("Enter email");
    } else if (password === "") {
      toast.error("Enter Password");
    } else if (role === "") {
      toast.error("Enter role");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/v1/user/loginUser",
          { email, password, role },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );

        setIsUserAuthenticated(true);
        setEmail("");
        setPassword("");
        setRole("");
        toast.success("Logged in successfully");
        navigateTo("/profile");
      } catch (err) {
        toast.error("Problem logging in User");
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (isUserAuthenticated) {
      navigateTo("/profile");
    }
  }, [isUserAuthenticated]);

  return (
    <div className="flex min-h-screen bg-black justify-center items-center">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-md p-8 bg-gray-200 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Login
        </h2>
        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border rounded py-2 px-3">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border rounded py-2 px-3">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Select Role
            </label>
            <div className="flex items-center border rounded py-2 px-3">
              <FaUser className="text-gray-500 mr-2" />
              <select
                id="role"
                name="role"
                className="w-full p-2 text-gray-700 leading-tight focus:outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <h4 className="mt-4 font-semibold text-center">
          Don't have an account?
        </h4>
        <Link
          to="/register"
          className="block text-center font-bold text-blue-600 hover:text-red-800"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
