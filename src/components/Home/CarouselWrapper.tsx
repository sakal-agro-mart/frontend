import React, { useEffect, useState } from "react";
import instance from "../../axios/instance";
import Carousel from "./Carousel";

const CarouselWrapper = (): JSX.Element => {
  const [carousels, setCarousels] = useState<Array<any>>([]);

  useEffect(() => {
    instance
      .get("/carousels")
      .then((res) => {
        setCarousels(res.data?.results);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const getChildren = () => {
    if (carousels.length == 0) return null;

    return <Carousel carousels={carousels} />;
  };

  return <div className="carousel-container">{getChildren()}</div>;
};

export default CarouselWrapper;
