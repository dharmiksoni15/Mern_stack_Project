import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminUsers.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:3100/api/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Users Data:", res.data);

      setUsers(res.data); // ⚠️ check backend format
    } catch (error) {
      console.log(
        "Error:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="users-container">
      <h1 className="page-title">Admin Users</h1>

      <div className="table-card">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>

                  <td>
                    <button className="edit-btn">Edit</button>
                  </td>

                  <td>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;