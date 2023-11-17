import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function Header() {
  //const username = useSelector((store) => store.user.username);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  function handlelogout() {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }

  return (
    <header>
      <span className="p-4 bg-gray-400">
        {username ? `Welcome ${username}` : "Waiting to login"}
      </span>

      <span className="float-right">
        <button onClick={handlelogout}>{token && "logout"}</button>
      </span>
    </header>
  );
}

export default Header;
