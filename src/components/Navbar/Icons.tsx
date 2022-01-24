import React from "react";
import { MdSearch, MdShoppingCart } from "react-icons/md";

const Icons = () => {
  return (
    <div>
      <span>
        <MdShoppingCart />
      </span>

      <span style={{ paddingLeft: 10 }}>
        <MdSearch />
      </span>
    </div>
  );
};

export default Icons;
