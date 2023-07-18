import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100&skip=0&select=title,price")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="w-full flex-col gap-5">
        {products.length === 0 ? (
          <div>No products available</div>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index} details={product} />
          ))
        )}
      </main>
    </>
  );
}

export default Home;
