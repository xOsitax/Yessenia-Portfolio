import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
