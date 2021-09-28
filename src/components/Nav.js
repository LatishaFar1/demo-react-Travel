import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <div className="nav-box">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          {" "}
          Home
        </Link>
        <Link to="/Destinations" className="nav-link">
          {" "}
          Destinations
        </Link>
        <Link to="/About" className="nav-link">
          {" "}
          About Tish ⚡️🎧🌙{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
