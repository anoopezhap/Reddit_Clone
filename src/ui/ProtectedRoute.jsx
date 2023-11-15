import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../features/login/authSlice";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //load the access token

  const token = localStorage.getItem("token");

  //while loading show a spinner

  //if there is no authenticated user redirect to login

  if (!token) {
    navigate("/login", { replace: true });
  }

  //if there is a logged in user re render the app
  return children;
}

export default ProtectedRoute;
