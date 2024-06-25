import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://i.pinimg.com/originals/a4/df/28/a4df285f186e5fd6c84c36c0f3a25068.jpg",
    "https://www.cinetrafic.fr/images/affiches/original/aff_9472020191115173008.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.27t9c8ddWmvhWqxVLRG5VAHaK-&pid=Api&P=0&h=220",
    "https://image.tmdb.org/t/p/original/yAonjcMRitkztnvRjrLqwpKgbXS.jpg",
    "https://c.pxhere.com/photos/3f/4a/chef_cook_cooking_food_kitchen_man_meat_pan-988057.jpg!d",
    "https://tse2.mm.bing.net/th?id=OIP.QjVSjvGLjO9tTQRemR-jRgHaLH&pid=Api&P=0&h=220",
    
  ];

  const settings = {
    infinte: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard src={image} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
