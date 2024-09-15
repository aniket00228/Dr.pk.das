import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import logo from './img/Logo-23.png'
import img25 from './img/Book-25.png'

function Navbar() {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/About" },
    { name: "Published Books", link: "/All-books" },
  ];
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      className="w-full sticky inset-x-0 top-0 z-30 mx-auto bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
      initial="hidden"
      animate="visible"
      variants={navbarVariants} // Adding the animation variants here
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-2xl flex items-center">
            <Link to="/">
              <img src={img25} alt="logo" className="h-14 w-28 pl-5"/>
              {/* <p className="font-extrabold text-2xl font-cursive">Logo</p> */}
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-9 h-9 text-xl"
          >
            {open ? <RxCross2 /> : <RiMenu4Fill />}
          </div>
          <ul
            className={`md:flex md:items-center md:gap-5 absolute md:static bg-blend-saturation md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${
              open ? "top-12 p-5 bg-white w-full" : "top-[-490px] "
            }`}
          >
            {Links.map((link) => (
              <li
                className="md:ml-8 font-semibold my-7 md:my-0"
                key={link.name}
              >
                <Link
                  to={link.link}
                  className="text-gray-900 hover:text-blue-500 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="md:ml-8 my-7 md:my-0">
              <Link
                to="/Contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;