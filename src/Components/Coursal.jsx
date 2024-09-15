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
              src="https://png.pngtree.com/thumb_back/fw800/background/20231003/pngtree-energetic-toy-rocket-blasts-off-from-a-sea-of-books-in-image_13551003.png"
              alt="Nature 1"
              className="w-full h-full img-cover max-h-screen object-center"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 0 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
              Parmanu Vishphote ke Baad <br />        (Hindi)
              </h2>
              <p className="text-md md:text-xl mt-2">
              The theme of discussion is what economic,<br /> political and social policies,<br /> India should have adopted after 1996.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPe4lvOZ7_ZIRiMJIOXtXsHMbQ024vrINppaYlMEuefpi112ZMRQRPNZtCSYUzOs6zk0&usqp=CAU"
              alt="Nature 2"
              className="w-full h-full img-cover max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 1 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold ">
              Value in Vedantic Tradition
              </h2>
              <p className="text-md md:text-xl mt-2 ">
              This book titled Values in Vedantic Tradition is his Ph.D. thesis,<br /> and it is interesting; because it discusses the impact of extra <br /> terrestrial civilizations on earthly civilization
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://st.depositphotos.com/1000423/4130/i/450/depositphotos_41303041-stock-photo-magic-book.jpg"
              alt="Nature 3"
              className="w-full h-full img-cover max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 2 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">Under the Twinkling Stars</h2>
              <p className="text-md md:text-xl mt-2">
              In this book, my poems written in Hindi,<br /> and a translation of my grand mother's <br /> poem originally in Bengali. 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[80vh] lg:h-screen">
            <img
              src="https://img.freepik.com/free-photo/digital-circle-circuit-blue-background-futuristic-technology_53876-124643.jpg"
              className="w-full h-full img-cover max-h-screen"
            />
            <div
              className={`absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 md:top-32 italic text-white transition-opacity duration-1000 ${
                activeIndex === 3 ? "opacity-100 delay-500" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
              Bhavishya Vigyan par Shodh
              </h2>
              <p className="text-md md:text-xl mt-2">
                This book tried to show by integrating aesthetics with <br /> mathematics that the humans of the future <br /> will also not be different from the present <br /> humans in their perception of beauty.
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