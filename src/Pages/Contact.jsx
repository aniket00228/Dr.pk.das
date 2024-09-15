import React, { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_p4q2uzy", // Replace with your EmailJS service ID
        "template_s99ypoh", // Replace with your EmailJS template ID
        form.current,
        "ahfzAvGc8hkQ6RCc8" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setMessageStatus("Message sent successfully!");
          setIsSending(false);
        },
        (error) => {
          setMessageStatus("Failed to send the message. Try again later.");
          setIsSending(false);
        }
      );

    // Clear form fields
    form.current.reset();
  };

  return (
    <motion.section
      className="max-w-screen-[80vw] mt-6 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="flex flex-col justify-between">
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Let&apos;s talk about everything!
          </h2>
          <div className="text-gray-700 mt-8 text-[20px]">
            Need to get in touch with us? Either fill out the form with your inquiry or find the <span className="underline">department email</span> you'd like to contact below.
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="user_name "
              required
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name="user_email"
              required
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="message"
              required
            ></textarea>
          </div>
          <div className="mt-8">
            <motion.button
              className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline flex justify-center items-center hover:bg-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : <><span className="mr-2">Send Message</span> <FiSend /></>}
            </motion.button>
          </div>
        </form>

        {messageStatus && (
          <div className="mt-4 text-center text-sm text-gray-600">{messageStatus}</div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
