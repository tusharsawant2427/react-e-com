import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyCarousel = () => {
  // Custom Next Arrow Component
  const NextArrow = ({ onClick }) => (
    <button
      type="button"
      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none slick-arrow slick-next"
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  );

  // Custom Previous Arrow Component
  const PrevArrow = ({ onClick }) => (
    <button
      type="button"
      className="slick-arrow slick-prev absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500, // Set autoplay speed to 3 seconds
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto mt-8">
        <Slider {...settings}>
          <div className="px-4 w-full">
            <img
              className="rounded-md"
              src="https://via.placeholder.com/1250x400"
              alt="Slide 1"
            />
          </div>
          <div className="px-4 w-full">
            <img
              className="rounded-md"
              src="https://via.placeholder.com/1250x400"
              alt="Slide 2"
            />
          </div>
          <div className="px-4 w-full">
            <img
              className="rounded-md"
              src="https://via.placeholder.com/1250x400"
              alt="Slide 3"
            />
          </div>
          <div className="px-4 w-full">
            <img
              className="rounded-md"
              src="https://via.placeholder.com/1250x400"
              alt="Slide 3"
            />
          </div>
          <div className="px-4 w-full">
            <img
              className="rounded-md"
              src="https://via.placeholder.com/1250x400"
              alt="Slide 3"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MyCarousel;
