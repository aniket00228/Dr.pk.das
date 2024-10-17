import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import Swiper autoplay styles
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import img18 from './img/Book-18.jpg';
import img17 from './img/Book-17.jpg';
import img16 from './img/Book-16.jpg';
import img15 from './img/Book-15.jpg';
import img14 from './img/Book-14.jpg';
import img13 from './img/Book-13.jpg';
import img12 from './img/Book-12.jpg';
import img11 from './img/Book-11.jpg';
import img10 from './img/Book-10.jpg';
import img9 from './img/Book-9.jpg';
import img8 from './img/Book-8.jpg';
import img7 from './img/Book-7.jpg';
import img6 from './img/Book-6.jpg';
import img5 from './img/Book-5.jpg';
import img4 from './img/Book-4.jpg';
import img3 from './img/Book-3.jpg';
import img2 from './img/Book-2.jpg';
import img1 from './img/Book-1.jpg';

const AllCoursal = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];

  return (
    <div className="px-4 sm:px-36"> {/* Adjust padding for mobile */}
      <div className="w-full max-w-screen-2xl mx-auto py-8 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000, // 3 seconds delay for autoplay
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 rounded-lg shadow-md border" // Ensuring full width and proper scaling
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AllCoursal;
