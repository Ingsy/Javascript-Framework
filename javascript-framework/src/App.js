import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/ProductPage';
import Home from './components/Homepage';
import RouteNotFound from './components/Layout/RouteNotFound';


function App() {
  return (
    <div>
      <Routes>
        <Route path="./components/Layout/index.jsx" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


