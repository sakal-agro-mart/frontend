import React from "react";
import FourProducts from "./FourProducts";

const Recent = () => {
  return (
    <FourProducts
      url="/products/recent/?page_size=4"
      title="Recent Products"
      subtitle="These are our newest products"
    />
  );
};

export default Recent;
