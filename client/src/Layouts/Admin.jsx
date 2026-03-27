import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminUsers.css";
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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
      console.log("Error:", error.response?.data || error.message);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );
    if (!confirmDelete) return;
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `http://localhost:3100/api/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);

      // UI update without refresh
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.log("Delete Error:", error.response?.data || error.message);
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
                    <button
                      onClick={() => navigate(`/admin/users/${user._id}/edit`)}
                    >
                      Edit
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
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
