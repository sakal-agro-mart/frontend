import React, { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import Button from "./CarouselButton";

type Carousels = {
  image: string;
  product: number;
};

type CarouselProps = {
  carousels: Carousels[];
};

const Carousel = (props: CarouselProps) => {
  const [index, setIndex] = useState(0);

  /*




  - when this function is called the slide changes
  - if you call with an index it changes to that

  */
  const slideHandler = (newIndex: number | void) => {
    if (newIndex) {
      clearInterval(interval.current);
      setIndex(newIndex);
    }

    if (!newIndex) setIndex((prev) => (prev + 1) % props.carousels.length);

    // slides is the array of rendered images
    const slidesHTMLCollection =
      document.getElementsByClassName("carousel-image");
    const slides: Array<any> = [].slice.call(slidesHTMLCollection, 0);

    for (const [i, image] of slides.entries()) {
      if (i === index) {
        image.classList.add("carousel-visible");
        image.classList.remove("carousel-hidden");
        continue;
      }

      image.classList.add("carousel-hidden");
      image.classList.remove("carousel-visible");
    }
  };

  const interval = useInterval(slideHandler, 5000);

  return (
    <>
      <div>{index}</div>
      {props.carousels.map(({ image, product }, i) => (
        <img key={i} className="carousel-image" src={image} />
      ))}

      <div className="carousel-buttons-container">
        {props.carousels.map((_, i) => (
          <Button
            key={i}
            active={i === index}
            onClick={() => slideHandler(i)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
