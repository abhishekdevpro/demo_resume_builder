// src/Slider.js
import React from 'react';
import Slider from 'react-slick';
import SlidingCard from './Card';

const cardData = [
  {
    title: "Beautiful Landscape",
    content: "Experience the serene beauty of nature.",
    imageUrl: "https://via.placeholder.com/400x600"
  },
  {
    title: "City Lights",
    content: "The vibrant life of the city at night.",
    imageUrl: "https://via.placeholder.com/400x600"
  },
  {
    title: "Mountain Peaks",
    content: "Reach new heights and conquer mountains.",
    imageUrl: "https://via.placeholder.com/400x600"
  },
  // Add more cards as needed
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <SlidingCard
          key={index}
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
        />
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

export default CustomSlider;
