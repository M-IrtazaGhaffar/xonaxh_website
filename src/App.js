import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Refund from "./pages/Refund";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <div className="body-font font-playfair text-black bg-white">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<AllProducts />} />
          <Route exact path="/products/men" element={<Products />} />
          <Route exact path="/products/men/:id" element={<Product />} />
          <Route exact path="/products/women" element={<Products />} />
          <Route exact path="/products/women/:id" element={<Product />} />
          <Route exact path="/products/kherri" element={<Products />} />
          <Route exact path="/products/kherri/:id" element={<Product />} />
          <Route exact path="/products/makeup" element={<Products />} />
          <Route exact path="/products/makeup/:id" element={<Product />} />
          <Route exact path="/products/fragnances" element={<Products />} />
          <Route exact path="/products/fragnances/:id" element={<Product />} />
          <Route exact path="/products/watches" element={<Products />} />
          <Route exact path="/products/wateches/:id" element={<Product />} />
          <Route exact path="/products/others" element={<Products />} />
          <Route exact path="/products/others/:id" element={<Products />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/refund" element={<Refund />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
