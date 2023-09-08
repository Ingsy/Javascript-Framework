import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/ProductPage';
import Home from './components/Homepage';
import RouteNotFound from './components/Layout/RouteNotFound';

function App() {
  return (
    <div>
      <Routes>
        {/* Define a root route for the homepage */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<RouteNotFound />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;


