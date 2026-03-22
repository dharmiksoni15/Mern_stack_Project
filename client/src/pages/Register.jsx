import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className="registration-container">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInput}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />

          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={user.phone}
            onChange={handleInput}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
