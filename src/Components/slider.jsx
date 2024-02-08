import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function Slider({ product }) {
  // const product = props.product;

  const Navigate = useNavigate();

  // Function to navigate to a specific product page
  const navigateToProduct = (productId) => {
    Navigate(`/SepProduct/${productId}`);
  };

  useEffect(() => {
    // console.log('product', product);
  }, [product]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="relative bg-[#f4f5f7] w-[21rem] max-w-[350px] max-h-[450px] cursor-pointer hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)]"
      onClick={() => navigateToProduct(product.id)}
      key={product.id}
    >
      <img
        src={product.img}
        alt="Avatar"
        className="w-[100%] h-[100%] object-cover"
      />
    </div>
  );
}

export default Slider;
