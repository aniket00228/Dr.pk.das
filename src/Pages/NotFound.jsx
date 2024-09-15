import React from "react";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const NotFound = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="bg-white"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="container flex items-center min-h-screen px-6 py-12 mx-auto"
        variants={fadeInDown}
      >
        <motion.div
          className="flex flex-col items-center max-w-sm mx-auto text-center"
          variants={fadeInUp}
        >
          <motion.p
            className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50"
            variants={fadeInUp}
          >
            <FaExclamationCircle className="w-6 h-6" />
          </motion.p>

          <motion.h1
            className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl"
            variants={fadeInUp}
          >
            Page not found
          </motion.h1>

          <motion.p className="mt-4 text-gray-500" variants={fadeInUp}>
            The page you are looking for doesn't exist. Here are some helpful
            links:
          </motion.p>

          <motion.div
            className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto"
            variants={fadeInUp}
          >
            <motion.button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft className="w-5 h-5 rtl:rotate-180" />
              <span>Go back</span>
            </motion.button>

            <motion.button
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600"
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take me home
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default NotFound;