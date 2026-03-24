import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify"; // ✅ added

const URL = "http://localhost:3100/api/auth/register";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeToken } = useAuth();

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
        toast.success("Registration Successful ✅"); // ✅ updated

        storeToken(data.token);

        setUser({ username: "", email: "", phone: "", password: "" });

        // ⏳ delay so toast can show
        setTimeout(() => {
          navigate("/login");
        }, 3500);
      } else {
        console.error("Registration failed:", data);

        toast.error(data.message || "Registration failed"); // ✅ fix

        if (data.extraDetails) {
          data.extraDetails.forEach((err) => toast.error(err));
        }
      }
    } catch (error) {
      console.error("Network/Error:", error);
      toast.error("Something went wrong 🚨"); // ✅ updated
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
