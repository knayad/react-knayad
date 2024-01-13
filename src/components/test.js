import React, { useState } from "react";
import Slider from "react-slick";

import tower from "../assets/images/sliders/travel/eftn.jpg";

const SliderComponent = ({ imgs, title }) => {
  const [images, setImages] = useState([
    { title: "Eiffel Tower, Paris", src: tower },
  ]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    vertical: true,
  };
  return (
    <div className="img-list">
      <h2>{title}</h2>
      <Slider {...settings}>
        {imgs.map((img) => (
          <div>
            <h2>{img.title}</h2>
            <img alt={img.title} src={img.src} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
