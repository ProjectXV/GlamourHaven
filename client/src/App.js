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
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route
          path="/products/product-details/:id"
          element={<ProductDetails />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/signup" element={<SignUp />} />
        {/* Do not put any route after this one */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
