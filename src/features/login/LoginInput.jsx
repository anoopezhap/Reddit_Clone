import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateName, updatePassword } from "./loginSlice";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/user";
import ErrorAlert from "../../ui/ErrorAlert";
import { addStatus, addToken } from "./authSlice";

function LoginInput() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("anoop@gmail.com");
  const [password, setPassword] = useState("1234");

  const dispatch = useDispatch();

  const { isLoading, mutate, error, isError, data, isSuccess } = useMutation({
    mutationFn: ({ userName, password }) => login(userName, password),
    onSuccess: (data) => {
      // dispatch(addToken(data.token));
      // dispatch(addStatus(data.status));
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user);
      //localStorage.setItem("status", data.status);
      navigate("/dashboard");
    },
    onError: () => {
      setUserName("");
      setPassword("");
    },
  });

  function handleLogin(e) {
    e.preventDefault();
    //updating redux store

    if (!userName && !password) return;

    dispatch(updateName(userName));
    dispatch(updatePassword(password));
    mutate({ userName, password });
  }

  return (
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <div>{isError ? <ErrorAlert /> : ""}</div>
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account
        </h1>
        <form>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              disabled={isLoading}
              name="username"
              id="username"
              type="text"
              placeholder="your email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              disabled={isLoading}
              name="password"
              id="password"
              type="password"
              placeholder="your password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              disabled={isLoading}
              onClick={handleLogin}
              className={`bg-green-300 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Click here to sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginInput;
