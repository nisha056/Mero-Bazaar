import { Card } from "@mantine/core";
function ProductCard({ details }: { details: any }) {
  if (!details || !details.title) {
    return null;
  }

  return (
    <Card style={{ backgroundColor: "whiteblue" }} className="p-0 my-5 shadow border mx-2">
      <p className="text-center font-large text-lg font-bold">{details.title}</p>
      <p className="text-center font-large text-lg font-bold">{details.price}</p>
    </Card>
  );
}

export default ProductCard;
