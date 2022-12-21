import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/" className="logo">
            <img src={logo} />
          </Link>

          <nav className="menu">
            <Link to="/" className="pages-link">
              Home
            </Link>
            <Link to="/about" className="pages-link">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
