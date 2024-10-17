import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Coursal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex justify-center items-center">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: false }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://images.theconversation.com/files/537993/original/file-20230718-17-19622i.jpeg?ixlib=rb-4.1.0&rect=502%2C1275%2C11227%2C5604&q=45&auto=format&w=1356&h=668&fit=crop"
              alt="Nature 1"
              className="w-full h-full  max-h-screen object-center"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 0 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
              Parmanu Vishphote ke Baad <br />        (Hindi)
              </h2><br />
              <p className="text-md md:text-xl mt-2 ">
              The theme of discussion is what economic, political <br /> and social policies, India should have adopted after <br /> 1996.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://st4.depositphotos.com/16337376/29580/i/450/depositphotos_295803522-stock-photo-maski-karnataka-india-14-august2019.jpg"
              alt="Nature 2"
              className="w-full h-full  max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 1 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-black">
              Value in Vedantic Tradition
              </h2><br />
              <p className="text-md md:text-xl mt-2 text-black ">
              This book titled Values in Vedantic Tradition is his <br /> Ph.D. thesis, and it is interesting; because it discusses <br /> the impact of extra  terrestrial civilizations on earthly <br /> civilization
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://www.shutterstock.com/image-vector/sky-night-background-dark-starry-600nw-1673529082.jpg"
              alt="Nature 3"
              className="w-full h-full max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 2 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">Under the Twinkling Stars</h2><br />
              <p className="text-md md:text-xl mt-2 ">
              In this book, my poems written in Hindi, and a <br /> translation of my grand mother's  poem originally in <br /> Bengali. 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/879/850/non_2x/high-tech-futuristic-background-free-vector.jpg"
              className="w-full h-full max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 3 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
              Bhavishya Vigyan par Shodh
              </h2><br />
              <p className="text-md md:text-xl mt-2 ">
                This book tried to show by integrating aesthetics <br /> with  mathematics that the humans of the future  will <br /> also not be different from the present humans in <br /> their perception of beauty.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10">
        <button
          className="swiper-button-prev text-white bg-transparent p-2 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10">
        <button
          className="swiper-button-next text-white bg-transparent p-2 rounded-full"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Coursal;