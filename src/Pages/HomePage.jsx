import React, { useEffect } from "react";
import Coursal from "../Components/Coursal";
import AllCoursal from "../Components/AllCoursal";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import img18 from './img/Book-18.jpg'
import img17 from './img/Book-17.jpg'
import img16 from './img/Book-16.jpg'
import img15 from './img/Book-15.jpg'
import img14 from './img/Book-14.jpg'
import img13 from './img/Book-13.jpg'
import img12 from './img/Book-12.jpg'
import img11 from './img/Book-11.jpg'
import img10 from './img/Book-10.jpg'
import img9 from './img/Book-9.jpg'
import img8 from './img/Book-8.jpg'
import img7 from './img/Book-7.jpg'
import img6 from './img/Book-6.jpg'
import img5 from './img/Book-5.jpg'
import img4 from './img/Book-4.jpg'
import img3 from './img/Book-3.jpg'
import img2 from './img/Book-2.jpg'
import img1 from './img/Book-1.jpg'

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.main
      className="mt-7"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div variants={fadeInUp}>
        <Coursal />
      </motion.div>

      <motion.div className="bg-white mt-3" variants={fadeInUp}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-700 sm:text-lg">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-black">
              Latest Book
            </h2>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Bhavishya Vigyan par Sodh 
            </h2>
            <p className="mb-4">
            Over the past few years, I have become interested in futurology. The future holds many possibilities. We will try to think about what kind of society we would like to create. The first part of the presented book is based on ideology, the second part is based on futurology and the third part is on the essential elements of ideology. Also, the conclusion in the last and fourth sections is important.
            </p>
            <p>
            In the two parts of the present book “Research on Future Science” under the subtitle ‘Plato’s Theory in Relation to Mathematics’, I have tried to show by integrating aesthetics with mathematics that the humans of the future will also not be different from the present humans in their perception of beauty. Mathematics is a subject that does not change with evolution.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={img18}
              alt="dummy content 1"
            />
          </div>
        </div>
      </motion.div>

      {/* <motion.div className="text-center p-10" variants={fadeIn}>
        <h1 className="font-bold text-4xl mb-4">Recent Publications</h1>
      </motion.div> */}
{/* 
      <motion.div
        className="flex justify-center flex-wrap items-center"
        variants={fadeInUp}
      >
        <motion.div
          className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
        >
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">CHAMOMILLE</div>
            <div className="text-gray-300 uppercase tracking-widest">
              NATURAL, OIL
            </div>
            <div className="text-gray-400 mt-8">
              <p className="font-bold">39.00 MLC</p>
              <p>Perfect everywhere</p>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </motion.div>
        <motion.div
          className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
        >
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">CHAMOMILLE</div>
            <div className="text-gray-300 uppercase tracking-widest">
              NATURAL, OIL
            </div>
            <div className="text-gray-400 mt-8">
              <p className="font-bold">39.00 MLC</p>
              <p>Perfect everywhere</p>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </motion.div>
        <motion.div
          className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
        >
          <div className="px-8 py-10">
            <div className="bg-orange-500 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all"></div>
            <div className="uppercase font-bold text-xl">CHAMOMILLE</div>
            <div className="text-gray-300 uppercase tracking-widest">
              NATURAL, OIL
            </div>
            <div className="text-gray-400 mt-8">
              <p className="font-bold">39.00 MLC</p>
              <p>Perfect everywhere</p>
            </div>
          </div>
          <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
          <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
        </motion.div>
      </motion.div> */}

      <motion.div className="text-center p-10" variants={fadeIn}>
        <h1 className="font-bold text-4xl mb-4">Recent Books Launched</h1>
      </motion.div>

      <motion.div
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        variants={fadeIn}
      >
        <motion.div
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#">
            <img
              src={img18}
              alt="Book"
              className="h-80 w-72 img-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
              Bhavishya Vigyan par Shodh
              </p>
              
            </div>
          </a>
        </motion.div>
        <motion.div
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#">
            <img
              src={img17}
              alt="Book"
              className="h-80 w-72 img-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
              Spectrum Essay
              </p>
              
            </div>
          </a>
        </motion.div>

        <motion.div
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#">
            <img
              src={img16}
              alt="Book"
              className="h-80 w-72 img-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
              Under the Twinkling Stars
              </p>
              
            </div>
          </a>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeIn}>
        <AllCoursal />
      </motion.div>
    </motion.main>
  );
};

export default HomePage;