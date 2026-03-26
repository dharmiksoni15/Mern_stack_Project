import { NavLink, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>

        <nav>
          <NavLink to="/admin/users" className="nav-link">
            Users
          </NavLink>

          <NavLink to="/admin/contacts" className="nav-link">
            Contacts
          </NavLink>

         

          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;