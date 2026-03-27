import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AdminUpdate.css";

const AdminUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getSingleUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`http://localhost:3100/api/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData(res.data);
    } catch (error) {
      console.log("Error fetching single user:", error.response?.data || error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        `http://localhost:3100/api/admin/users/${id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("User updated successfully");
      navigate("/admin/users");
    } catch (error) {
      console.log("Error updating user:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, [id]);

  return (
    <div className="admin-update-wrapper">
      <div className="admin-update-card">
        <h2>Update User</h2>

        <form onSubmit={handleSubmit} className="admin-update-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleInput}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInput}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleInput}
              placeholder="Enter phone number"
            />
          </div>

          <button type="submit" className="update-btn">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdate;