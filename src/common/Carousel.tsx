import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductImage } from "../pages/productDetail/productDetail";

interface CarouselProps {
  images: ProductImage[];
}

const Carousel = (props: CarouselProps) => {
  const { images } = props;

  // const [productImages, setProductImages] = useState<ProductImage[]>(images);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <div className="productImageBox" key={index}>
              <img className="image" src={item.url} alt="images" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
