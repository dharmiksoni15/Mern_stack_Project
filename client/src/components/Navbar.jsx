import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const { isLoggedIn, LogoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    LogoutUser();      // Clears token from context and localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">Dharmik Soni</NavLink>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {!isLoggedIn && (
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            )}

            <li>
              {isLoggedIn ? (
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="login-btn">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;