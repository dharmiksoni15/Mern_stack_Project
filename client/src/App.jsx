import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./store/Auth";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Logout from "./pages/Logout";
import Admin from "./Layouts/Admin";
import AdminContacts from "./pages/AdminContacs";
import AdminLayout from "./Layouts/AdminLayout";
import AdminUsers from "./Layouts/Admin";
import AdminUpdate from "./Layouts/AdminUpdate";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/admin/users" element={<Admin />} />
          <Route path="/admin/contacts" element={<AdminContacts />} /> */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="/admin/users/:id/edit" element={<AdminUpdate/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
