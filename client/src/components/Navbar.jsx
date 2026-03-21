import { NavLink } from "react-router-dom";
import "./Navbar.css";

 const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
          <NavLink to="/">Dharmik Soni</NavLink>
        </div>

        <nav>
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login" className="login-btn">Login</NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;