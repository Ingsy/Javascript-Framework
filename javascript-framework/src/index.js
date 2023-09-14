import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/Cart/cartContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);

reportWebVitals();


