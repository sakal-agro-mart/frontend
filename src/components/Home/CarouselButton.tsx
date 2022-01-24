import React from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";

type ButtonProps = {
  active: boolean;
  onClick: () => void;
};

const CarouselButton = (props: ButtonProps) => {
  let button = <BsCircle />;

  if (props.active) button = <BsCircleFill />;

  return (
    <span className="carousel-button-wrapper" onClick={props.onClick}>
      {button}
    </span>
  );
};

export default CarouselButton;
