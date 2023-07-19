import { Card } from "@mantine/core";
import { useEffect, useState } from "react";

interface ProductCardProps {
  details: {
    title: string;
    price: number;
  };
  imageUrl: string;
}

function ProductCard({ details, imageUrl }: ProductCardProps) {
  const [blur, setBlur] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {
      setBlur(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Card style={{ backgroundColor: "whiteblue" }} className="p-0 my-5 shadow border mx-2">
      <div className="flex gap-5 items-center ">
        <img
          src={imageUrl}
          className={`h-20 ${blur ? 'blur-effect' : ''}`}
        />
        <div className=" flex flex-col md:mx-20">
          <p className=" font-large text-lg font-bold">{details.title}</p>
          <p className="  font-large text-lg font-bold">{details.price}</p>
        </div>
      </div>


    </Card>
  );
}

export default ProductCard;
