import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Home() {
  const [products, setProducts] = useState<any>([]);
  const [images, setImages] = useState<any>([]);

  useEffect(() => {

    axios
      .get("https://dummyjson.com/products?limit=100&skip=0&select=title,price")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
        setProducts([])
      });

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setImages(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [products, images]);

  if (!Array.isArray(products) || !Array.isArray(images)) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className="w-full flex-col gap-5">
        {products.length === 0 ? (
          <div>No products available</div>
        ) : (
          products.map((product, index) => {
            const image = images[index];
            return <ProductCard key={index} details={product} imageUrl={image.url} />;
          })
        )}
      </main>
    </>
  );
}

export default Home;
