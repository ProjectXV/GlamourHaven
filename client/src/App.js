// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/Admin/Dashboard";
import Sidebar from "./components/Sidebar"
import Service from "./pages/Admin/Service";
import Settings from "./pages/Settings";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/product-details/:id" element={<ProductDetails />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/signup" element={<SignUp />} />
        <Route path="/sidebar" element={<Sidebar />} /> 
        <Route path="/addservice" element={<Service />} />
        <Route
          path="/products/product-details/:id"
          element={<ProductDetails />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/signup" element={<SignUp />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/account/settings" element={<Settings />} />

        {/* Do not put any route after this one */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
