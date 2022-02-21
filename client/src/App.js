// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
// components import
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./utils/PrivateRoute";

//Roles import
import { ROLES } from "./utils/roles";

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
import ReservationModal from "./components/ReservationModal.jsx";

const routes = [
  {
    path: "admin/dashboard",
    element: AdminDashboard,
    roles: [ROLES.Manager],
  },
  {
    path: "admin/clients",
    element: Clients,
    roles: [ROLES.Manager],
  },
  {
    path: "admin/inventory",
    element: Inventory,
    roles: [ROLES.Manager],
  },
  {
    path: "admin/addstaff",
    element: AddStaff,
    roles: [ROLES.Manager],
  },
  {
    path: "admin/addproduct",
    element: AddProduct,
    roles: [ROLES.Manager],
  },
  {
    path: "admin/viewstaff",
    element: AdminViewStaff,
    roles: [ROLES.Manager],
  },
  {
    path: "staff/dashboard",
    element: StaffDashboard,
    roles: [ROLES.Manager, ROLES.Staff],
  },
  {
    path: "client/dashboard",
    element: ClientDashboard,
    roles: [ROLES.Client],
  },
  {
    path: "service",
    element: Service,
    roles: [ROLES.Manager, ROLES.Client, ROLES.Staff],
  },
  {
    path: "account/settings",
    element: Settings,
    roles: [ROLES.Manager, ROLES.Client, ROLES.Staff],
  },
  {
    path: "appointments",
    element: Appointments,
    roles: [ROLES.Manager, ROLES.Client, ROLES.Staff],
  },
  {
    path: "appointments/appoitment-details/:id",
    element: AppointmentDetails,
    roles: [ROLES.Manager, ROLES.Client, ROLES.Staff],
  },
];

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
        <Route
          path="/checkout"
          element={
            <PrivateRoute roles={[ROLES.Manager, ROLES.Staff, ROLES.Client]}>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/test"element={<ReservationModal/>}/>

        {/* Main App pages */}
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute roles={route.roles}>
                  <route.element />
                </PrivateRoute>
              }
            />
          ))}
        </Route>

        <Route path="/access-denied" element={<AccessDenied />} />

        {/* Do not put any route after this one */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
