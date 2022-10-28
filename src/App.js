import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Live from "./components/Live";
import Music from "./components/Music";
import Store from "./components/Store";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Product from "./components/Product";
import NavigateToProduct from "./components/NavigateToProduct";
import CheckoutPage from "./components/CheckoutPage";
import ThankYouPage from "./components/ThankYouPage";
import CustomerSignup from "./components/CustomerSignup";
import Signin from "./components/Signin";
import UserCreated from "./components/UserCreated";
import QuantityDropdown from "./components/QuantityDropdown";
import CartProvider from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/live" element={<Live />} />
          <Route path="/music" element={<Music />} />
          <Route path="/media" element={<Media />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/thankyoupage" element={<ThankYouPage />} />
          <Route path="/customersignup" element={<CustomerSignup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/usercreated" element={<UserCreated />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
