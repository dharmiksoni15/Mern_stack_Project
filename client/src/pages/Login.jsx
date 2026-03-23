import { useState } from "react";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const URL = "http://localhost:3100/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { storeToken } = useAuth(); 
  console.log("AUTH VALUE:", useAuth()); 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("login form response:", res_data);

      if (response.ok) {
        alert("Login Successful");
        storeToken(res_data.token); 
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={user.email} onChange={handleInput} />
        <label>Password</label>
        <input type="password" name="password" value={user.password} onChange={handleInput} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;