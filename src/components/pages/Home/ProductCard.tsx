import { Card } from "@mantine/core";
import { useEffect, useState, useRef } from "react";

interface ProductCardProps {
  details: {
    title: string;
    price: number;
  };
  imageUrl: string;
}

function ProductCard({ details, imageUrl }: ProductCardProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([value]) => {
        setIsIntersecting(value.isIntersecting);
      },
      { threshold: 1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <Card style={{ backgroundColor: "whiteblue" }} className="p-0 my-5 shadow border mx-2">
      <div className="flex gap-5 items-center ">
        <img
          ref={imageRef}
          src={imageUrl}
          className={`h-20 ${isIntersecting ? '' : 'blur-effect'}`}
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
