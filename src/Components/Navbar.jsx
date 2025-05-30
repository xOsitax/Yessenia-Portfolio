import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar-nav">
        <ul className="navbar-list">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="navbar-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
