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

  // this useEffect is used to add and remove classes
  // based on the index value
  useEffect(() => {
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
  }, [index]);

  const interval = useInterval(() => {
    setIndex((prev) => (prev + 1) % props.carousels.length);
  }, 5000);

  const buttonClickHandler = (i: number) => {
    clearInterval(interval.current);
    setIndex(i);
  };

  /*






  */
  return (
    <>
      <div style={{ position: "absolute", zIndex: 5000, fontSize: 100 }}>
        {index}
      </div>
      {props.carousels.map(({ image, product }, i) => (
        <img key={i} className="carousel-image" src={image} />
      ))}

      <div className="carousel-buttons-container">
        {props.carousels.map((_, i) => (
          <Button
            key={i}
            active={i === index}
            onClick={() => buttonClickHandler(i)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
