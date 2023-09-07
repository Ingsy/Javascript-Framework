import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


<BrowserRouter>
  <nav>
    <ul>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route index element={<div>Home</div>} />
    <Route path="products" element={<div>Products</div>} />
    <Route path="*" element={<div>Route not found</div>} />
  </Routes>
</BrowserRouter>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
