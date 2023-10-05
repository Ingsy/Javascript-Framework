import React, { useEffect, useState } from 'react';
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
  const [products, setProducts] = useState([]);

  const onProductSearch = (filteredSuggestions) => {
    setProducts(filteredSuggestions);
  }

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(`Error fetching products:`, error));
  }, []);

  return (
    <Routes>
      {/* Define a root route for the homepage */}
      <Route path="/" element={<Layout onSearch={onProductSearch} products={products} />}>
        <Route index element={<Home filterProd={products} />} />
        <Route path="products" element={<ProductPage filterProd={products} />} />
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




