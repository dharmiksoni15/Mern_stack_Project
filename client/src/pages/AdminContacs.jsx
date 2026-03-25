import { useEffect, useState } from "react";
import axios from "axios";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  // 🔥 Fetch Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get("http://localhost:3100/api/admin/contacts");

      console.log("Contacts API Response:", res.data);
      setContacts(res.data);
    } catch (error) {
      console.log("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Contacts</h2>

      {!contacts || contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        contacts.map((contact) => (
          <div
            key={contact._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>Name:</strong> {contact.username}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>

            {contact.message && (
              <p>
                <strong>Message:</strong> {contact.message}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AdminContacts;
