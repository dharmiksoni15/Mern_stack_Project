import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth"; // import auth context

const URL = "http://localhost:3100/api/auth/register";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeToken } = useAuth(); // get storeToken from context

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Register data:", user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful!");

        // store token immediately after registration
        storeToken(data.token);

        // Clear form
        setUser({ username: "", email: "", phone: "", password: "" });

        // Redirect to home page (user is logged in now)
        navigate("/");

        console.log("Server response with token:", data);
      } else {
        console.error("Registration failed:", data);
        alert("Registration failed. Please check the details.");
      }
    } catch (error) {
      console.error("Network/Error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="registration-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInput}
          placeholder="Enter your username"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInput}
          placeholder="Enter your email"
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleInput}
          placeholder="Enter your phone number"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInput}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;