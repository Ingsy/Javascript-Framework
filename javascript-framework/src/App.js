import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Homepage';
import RouteNotFound from './components/Layout/RouteNotFound';
import CheckoutPage from "./components/CheckoutPage";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
import ContactPage from './components/ContactPage';
import ProductDetails from './components/ProductDetails';
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Routes>
      {/* Define a root route for the homepage */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="checkout-success" element={<CheckoutSuccessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="*" element={<RouteNotFound />} /> {/* Catch-all route */}
      </Route>
    </Routes>
  );
}

export default App;




