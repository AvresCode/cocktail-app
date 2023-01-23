import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = (): JSX.Element => {
  return (
    <div className="navbar-container">
      <Link to="/" className="nav-link">
        Homepage
      </Link>
      <Link to="/cocktails" className="nav-link">
        Cocktails
      </Link>
    </div>
  );
};
