import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Home() {
  const [products, setProducts] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100&skip=0")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setProducts([])
        setLoading(false);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className="w-full flex-col gap-5">
        {products.length === 0 ? (
          <div>No products available</div>
        ) : (
          products.map((product: any, index: any) => {
            const image = images[index];
            return <ProductCard key={index} details={product} imageUrl={image?.url} />;
          })
        )}
      </main>
    </>
  );
}

export default Home;
