import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
// components import
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import GeneralLoading from "./components/GeneralLoading";

//Roles import
import { ROLES } from "./utils/roles";

// page imports
import About from "./pages/ExternalPages/About";
import Contact from "./pages/ExternalPages/Contact/Contact";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
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
import AccessDenied from "./pages/AccessDenied";
import ReservationDrawer from "./components/ReservationDrawer.jsx";
import AdminAddService from "./pages/Admin/AdminAddService/AdminAddService";
import AdminServiceDetails from "./pages/Admin/AdminAddService/AdminServiceDetails";
import SetNewPassword from "./pages/Password/SetNewPassword";
import ForgotPassword from "./pages/Password/ForgotPassword";
import EmailReset from "./pages/Password/EmailReset";
import ActivateAccount from "./pages/Auth/ActivateAccount";
import ClientOrders from "./pages/Client/Orders";
import AdminOrders from "./pages/Admin/Orders";
import { OrderDetails } from "./pages/Common/OrderDetails";
import LipaNaMpesa from "./pages/Products/MPESA/LipaNaMpesa";
import LipaNaMpesaStep2 from "./pages/Products/MPESA/Step2";
import UserProfile from "./pages/Admin/UserProfile";
// Dont put any page import below this point
const AppointmentDetails = React.lazy(() =>
  import("./pages/Common/AppointmentDetails")
);
const ProductDetails = React.lazy(() =>
  import("./pages/Products/ProductDetails")
);

const Products = React.lazy(() => import("./pages/Products/Products"));
const Home = React.lazy(() => import("./pages/ExternalPages/Home"));

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
    path: "admin/addservice",
    element: AdminAddService,
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
    roles: [ROLES.Staff],
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
    path: "appointments/appointment-details/:appointment_id",
    element: AppointmentDetails,
    roles: [ROLES.Manager, ROLES.Client, ROLES.Staff],
  },
  {
    path: "admin/orders",
    element: AdminOrders,
    roles: [ROLES.Manager, ROLES.Client],
  },
  {
    path: "client/orders",
    element: ClientOrders,
    roles: [ROLES.Client, ROLES.Manager],
  },
  {
    path: "orders/order-details/:order_id",
    element: OrderDetails,
    roles: [ROLES.Manager, ROLES.Client],
  },
  {
    path: "staff/:staff_id/profile",
    element: UserProfile,
    roles: [ROLES.Manager],
  },
  {
    path: "client/:client_id/profile",
    element: UserProfile,
    roles: [ROLES.Manager],
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        {/* External Pages */}
        <Route index element={<Home />} />
        <Route path="/reset-password" element={<SetNewPassword />} />
        <Route path="/open-email" element={<EmailReset />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/product-details/:product_id"
          element={<ProductDetails />}
        />
        <Route
          path="/service/service-details/:service_id"
          element={<AdminServiceDetails />}
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute roles={[ROLES.Manager, ROLES.Staff, ROLES.Client]}>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/test" element={<ReservationDrawer />} />

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

        <Route path="/orders/lipa-na-mpesa/step1" element={<LipaNaMpesa />} />
        <Route
          path="/orders/lipa-na-mpesa/step2"
          element={<LipaNaMpesaStep2 />}
        />
        <Route
          path="/activate-account/:uid/:token"
          element={<ActivateAccount />}
        />
        {/* Do not put any route after this one */}
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route element={() => <GeneralLoading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
