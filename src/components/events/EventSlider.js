import React, { useState } from "react";
import Slider from "react-slick";

import NextArrow from "./NextArrow";
import PrevArrow from "./PreviousArrow";
import Slides from "./Eventsslides";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import event from "../../assets/images/OurEventsImages/orientation.png";

const SliderFunction = () => {
  const information = [
    {
      id: 1,
      event: `${event}`,
    },
    {
      id: 2,
      event: `${event}`,
    },
    {
      id: 3,
      event: `${event}`,
    },
    {
      id: 4,
      event: `${event}`,
    },
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className=" bg-blue-50 bg-slickBackground">
      <div className="px-10">
        <p className="text-center pt-6 pb-4 text-4xl font-bold text-gray-700">
          Our <span className="text-yellow-400">Events</span>
        </p>
        <p className="text-center text-gray-600 pb-8">
          You landed on our 'Promised land' , created by the club and for the
          club! Channelize your skills in the right direction along with
          <br />
          inclusive learning and disseminating information.
          <br />
        </p>
      </div>
      <Slider key="slide" {...settings} className="mx-2 px-2">
        {information.map((info, idx, id) => (
          <Slides
            key={id}
            idx={idx}
            imageIndex={imageIndex}
            event={info.event}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderFunction;
