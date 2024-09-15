import React, { useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import AllCoursal from "../Components/AllCoursal";
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
import img21 from './img/Book-21.png'
import img22 from './img/Book-22.png'

const AllBooks = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <motion.div
        className="bg-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
          variants={fadeInUp}
        >
          <div className="font-light text-gray-700 sm:text-lg">
            <motion.h2
              className="mb-4 text-4xl tracking-tight font-extrabold text-black"
              variants={fadeInUp}
            >
              My Books
            </motion.h2>
            <motion.p className="mb-4" variants={fadeInUp}>
            I have written eighteen books in an effort to create a comprehensive philosophy. The culmination of your work explores a range of topics, possibly drawing from areas such as ethics, metaphysics, and social theory, and you aim to integrate them into a cohesive worldview. Your final book focuses on Futurology, examining the future of human society, technology, and possible directions for humanity's evolution. Together, your books appear to form a large-scale intellectual project aimed at understanding and forecasting both the present and future dimensions of human existence.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8"
            variants={fadeInLeft}
          >
            <img
              className="w-full rounded-lg"
              src={img21}
              alt="dummy content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={img22}
              alt="dummy content 2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center p-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="font-bold text-4xl mb-4">
          Authors All Books for Reference Download
        </h1>
        <h1 className="text-3xl">All Books</h1>
      </motion.div>

      <motion.div
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img1}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Philosophy of Mahatma Gandhi and Future Ideologist
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-85126-83-6 (1999)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  Publisher: Anu Books, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img2}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Parmanu Vishphote ke Baad (Hindi)
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-85126-95-X (2001)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Anu Books, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img3}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Spectrum 
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-85126-98-4 (2001)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Anu Books, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img4}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Research papers on Social Science and Philosophy
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  YEAR: 2001
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Rahul Publishing House, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img5}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Differential Realism 
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-88791-06-7 (2003)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Rahul Publishing House, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img6}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Modern Vedanta 
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-88791-11-3 (2004)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Rahul Publishing House, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img7}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Adhayatmic Samayavad (Hindi)
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-88791-08-3 (2004)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Rahul Publishing House, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img8}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Vanishing Horizon
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  Year: 2004
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Chaitya Publishing Agency, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img9}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Kavayashastra and Samakalnatmac Siddhants (Hindi) 
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-88791-07-5 (2004) 
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Rahul Publishing House, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img10}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Vishva Samaj and Sanskriti (Hindi) 
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-88791-09-1 (2004)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Rahul Publishing House, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img11}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Values in Vedantic Tradition (My Ph.D. Dissertation)
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 81-88791-12-1 (2005)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Rahul Publishing House, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img12}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Essays on Sociology and Social Philosophy
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 978-93-82166-14-6 (2013)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Anu Books, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img13}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Golden Essays
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 978-93-82166-27-6 (2014)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Anu Books, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img14}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Essay on a Variety on Subjects
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 978-81-910498-5-5 (2022)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Vasunandi Publications, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img15}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : After Nuclear Explosions (A conceptual discussion)
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 978-81-910498-6-2 (2022)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Vasunandi Publications, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img16}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Under the Twinkling Stars
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 978-93-92436-59-8 (2023)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Nirupma Prakashan, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img17}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Spectrum Essay 
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 978-93-92436-64-2 (2023)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Nirupma Prakashan, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
        
        {[1].map((_, index) => (
          <motion.div
            key={index} 
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:text-3xl transition-none"
            variants={fadeInUp}
          >
            <a href="#">
              <img
                src={img18}
                alt="Book"
                className="h-80 w-72 img-cover rounded-t-xl hover:scale-105 hover:shadow-2xl hover:bg-slate-400"
              />
              <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Book Name : Bhavishya Vigyan par Shodh
                </p>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-3">
                  ISBN: 978-93-92436-78-9 (2024)
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] font-semibold text-black cursor-auto my-1">
                  Publisher: Nirupma Prakashan, Meerut
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <AllCoursal />
    </section>
  );
};

export default AllBooks;