import ProductList from "../ProductList";
import ProductDetails from "../ProductDetails";
import Layout from "../Layout";

function Home() {
    return (
        <div>
          <Layout />
          <div className="container mt-5">
            <h1>Welcome to Our Online Store</h1>
            <div className="row">
              {ProductList.map((product) => (
                <ProductDetails key={product.id} ProductDetails={ProductDetails} />
              ))}
            </div>
          </div>
        </div>
      );
    }

  export default Home; 