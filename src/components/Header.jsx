import "./Header.css";
import NavBar from "./NavBar";

const Header = ({ brand }) => {
  return (
    <header className="header">
      <h1>{brand}</h1>
      <NavBar />
    </header>
  );
};

export default Header;
