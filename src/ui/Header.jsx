import { useSelector } from "react-redux";

function Header() {
  const username = useSelector((store) => store.user.username);

  return (
    <header className="p-4 bg-gray-400">
      {username ? `Welcome ${username}` : "Waiting to login"}
      <span></span>
    </header>
  );
}

export default Header;
