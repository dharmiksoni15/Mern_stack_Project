import { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  // 🔥 Fetch Users
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3100/api/admin/users");

      console.log("API Response:", res.data);

      // ✅ Backend direct array mokle che
      setUsers(res.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Users</h2>

      {/* ✅ Safe check */}
      {!users || users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>Name:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminUsers;
