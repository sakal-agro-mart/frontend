import React from "react";
import { RouteProps } from "react-router-dom";
import Carousel from "../components/Home/CarouselWrapper";

const Home = (props: RouteProps): JSX.Element => {
  return (
    <>
      <Carousel />
    </>
  );
};

export default Home;
