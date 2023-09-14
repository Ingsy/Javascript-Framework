import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Homepage';
import Products from './components/ProductPage';
import RouteNotFound from './components/Layout/RouteNotFound';
import CheckoutPage from "./components/CheckoutPage";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Routes>
      {/* Define a root route for the homepage */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="checkout-success" element={<CheckoutSuccessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<RouteNotFound />} /> {/* Catch-all route */}
      </Route>
    </Routes>
  );
}

export default App;




