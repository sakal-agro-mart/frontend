import React from "react";
import FourProducts from "./FourProducts";

const Featured = () => {
  return (
    <FourProducts
      url="/products/featured/?page_size=4"
      title="Featured Products"
      subtitle="These are the featured & branded products"
    />
  );
};

export default Featured;
