import React from "react";
import { RouteProps } from "react-router-dom";
import Carousel from "../components/Home/CarouselWrapper";
import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import Recent from "../components/Home/Recent";

const Home = (props: RouteProps): JSX.Element => {
  return (
    <>
      <Carousel />
      <Categories />
      <Featured />
      <Recent />
    </>
  );
};

export default Home;
