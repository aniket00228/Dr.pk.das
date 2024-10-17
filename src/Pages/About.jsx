import React, { useEffect } from "react";
import { FaStar, FaCircle, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import img19 from './img/Book-19.png'
import img20 from './img/Book-20.jpeg'

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section className="text-gray-700 body-font">
      <motion.div
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={fadeIn}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Author
            <br className="hidden lg:inline-block" />
          
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
          "Lost Time near Returns", hence, I perceive, all that I have achieved in intellectual and artistic domains, I should make public. I am sixty five years old, and a retired professor of political science. Since, I was a child; I was fascinated with such questions as we usually study in philosophy. However, my parents advised me to do M.A. in English and Political Science, because to get a teachers job in these subject was easier.
          </p>
          <p className="mb-8 leading-relaxed text-justify">
          After working as "Research Associate" for five years, in 1996, I became a Lecturer in Machhra College, Meerut (U.P.) Thereafter till to date; I am fully engrossed in reading and writing. 
          </p>
          <p className="mb-8 leading-relaxed text-justify">
          Dr. P.K. Das is M.A. in Political Science & English Literature and Ph.D. in Political Science on the topic 'Value in Vedantic Tradition'. He has published many research papers and have eighteen published books. I am retired from Asstt. Professor, Department of Political Science, C.S.S.S (P.G.) College Machhra (Meerut), U.P. India. Dr. Das is engaged in creative research on 'Theoretical Aspects of Social Sciences and Philosophy' now a day. 
          </p>
          <div className="flex justify-center">
            <Link to="/Contact">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Go to Contact
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={fadeIn}
        >
          <img
            className="img-cover img-center rounded w-[520px] h-[450px]"
            alt="hero"
            src={img20}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-gray-700 body-font border-t border-gray-200"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <motion.div
            className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
            variants={fadeIn}
          >
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={img19}
            />
          </motion.div>

          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col mb-10 lg:items-start items-center"
              variants={fadeIn}
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <FaStar className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Book 1
                </h2>
                <p className="leading-relaxed text-base">
                Parmanu Vishphote ke Baad (Hindi)
                </p>
                <Link to="/All-Books"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Go To Book
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col mb-10 lg:items-start items-center"
              variants={fadeIn}
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <FaCircle className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Book 2
                </h2>
                <p className="leading-relaxed text-base">
                Bhavishya Vigyan par Shodh
                </p>
                <Link to="/All-Books"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Go To Book
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex flex-col mb-10 lg:items-start items-center"
              variants={fadeIn}
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <FaUserAlt className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Book 3
                </h2>
                <p className="leading-relaxed text-base">
                Values in Vedantic Tradition (My Ph.D. Dissertation)
                </p>
                <Link to="/All-Books"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                  
                >
                  Go To Book
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;