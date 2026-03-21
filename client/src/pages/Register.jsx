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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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