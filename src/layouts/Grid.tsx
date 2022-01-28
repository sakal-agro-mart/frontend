import React from "react";

type GridProps = {
  children: JSX.Element[];
};

const Grid = (props: GridProps) => {
  return (
    <div className="grid-container">
      {props.children.map((child, index) => (
        <div key={index} className="grid-item">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Grid;
