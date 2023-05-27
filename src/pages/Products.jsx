import Card from "../components/Card/Card";
import Navbar from "../components/Navbar";
import productsController from "../controller/products";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await productsController.getProducts();
    setProducts(data);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        products.map((p) => <Card key={p.id} product={p} />)
      )}
    </div>
  );
};

export default Products;
