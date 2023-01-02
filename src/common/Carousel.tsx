import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductImage } from "../pages/productDetail/productDetail";

interface CarouselProps {
  images: ProductImage[];
}

const Carousel = (props: CarouselProps) => {
  const { images } = props;
  const [currentSlick, setCurrentSlick] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    beforeChange: (current: any, next: any) => setCurrentSlick(next),
    appendDots: (dots: any) => {
      console.log(dots);
      return (
        <div>
          <ul>{currentSlick + 1 + "/" + dots.length}</ul>
        </div>
      );
    },
    dotsClass: "dots_custom",

    // customPaging: (i: number) => {
    //   console.log("i:: ", i);
    //   return (
    //     <div
    //       style={{
    //         width: "30px",
    //         color: "blue",
    //         border: "1px blue solid",
    //       }}
    //     >
    //       {i + 1}
    //     </div>
    //   );
    // },
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <div className="productImageBox" key={index}>
              <img
                className="image"
                src={item.url}
                alt="images"
                style={{ position: "relative" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
