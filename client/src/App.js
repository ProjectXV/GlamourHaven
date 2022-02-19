import "./App.css";
import { Routes, Route } from "react-router-dom";
// components import
import Layout from "./components/Layout/Layout";

// page imports
import Home from "./pages/ExternalPages/Home";
import About from "./pages/ExternalPages/About";
import Contact from "./pages/ExternalPages/Contact/Contact";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";
import Checkout from "./pages/Products/Checkout";
import AdminDashboard from "./pages/Admin/Dashboard";
import Inventory from "./pages/Admin/Inventory";
import AddStaff from "./pages/Admin/AdminStaff/AdminAddStaff";
import AddProduct from "./pages/Admin/AddProduct";
import Clients from "./pages/Admin/Clients";
import AdminViewStaff from "./pages/Admin/AdminStaff/AdminViewStaff";
import Service from "./pages/Common/Service";
import StaffDashboard from "./pages/Staff/Dashboard";
import ClientDashboard from "./pages/Client/Dashboard";
import Settings from "./pages/Common/Settings";
import Appointments from "./pages/Common/Appointments";
import NotFound from "./pages/NotFound";
import AppointmentDetails from "./pages/Common/AppointmentDetails";
import AccessDenied from "./pages/AccessDenied";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* External Pages */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/product-details/:id"
          element={<ProductDetails />}
        />
        <Route path="/checkout" element={<Checkout />} />

        {/* Main App pages */}
        <Route path="/" element={<Layout />}>
          {/* admin only pages */}
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="admin/clients" element={<Clients />} />
          <Route path="admin/inventory" element={<Inventory />} />
          <Route path="admin/addstaff" element={<AddStaff />} />
          <Route path="admin/addproduct" element={<AddProduct />} />
          <Route path="admin/viewstaff" element={<AdminViewStaff />} />
          {/* staff only pages */}
          <Route path="staff/dashboard" element={<StaffDashboard />} />
          {/* client only pages */}
          <Route path="client/dashboard" element={<ClientDashboard />} />
          {/* common pages */}
          <Route path="service" element={<Service />} />
          <Route path="account/settings" element={<Settings />} />
          <Route path="appointments" element={<Appointments />} />
          <Route
            path="appointments/appointment-details/:id"
            element={<AppointmentDetails />}
          />
        </Route>

        <Route path="/access-denied" element={<AccessDenied />} />

        {/* Do not put any route after this one */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
