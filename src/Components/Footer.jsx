import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.footer
      className="bg-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <motion.div className="flex flex-wrap justify-center -mx-5 -my-2">
          <motion.div className="px-5 py-2" variants={fadeInUp}>
            <Link
              to="/About"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About Me
            </Link>
          </motion.div>
          <motion.div className="px-5 py-2" variants={fadeInUp}>
            <Link
              to="/All-books"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              All Books
            </Link>
          </motion.div>
          <motion.div className="px-5 py-2" variants={fadeInUp}>
            <Link
              to="/Contact"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-8 space-x-6"
          variants={fadeInUp}
        >
          <motion.a href="#" className="text-gray-400 hover:text-blue-500">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" />
          </motion.a>
          <motion.a href="#" className="text-gray-400 hover:text-red-500">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </motion.a>
          <motion.a href="#" className="text-gray-400 hover:text-black">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-6 h-6" />
          </motion.a>
          <motion.a href="#" className="text-gray-400 hover:text-black">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a href="#" className="text-gray-400 hover:text-red-700">
            <span className="sr-only">Dribbble</span>
            <FaDribbble className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-8 text-base leading-6 text-center text-gray-400"
          variants={fadeInUp}
        >
          © 2024 Dr.PK Das, Inc. All rights reserved. Powered By Aniket Agarwal
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;