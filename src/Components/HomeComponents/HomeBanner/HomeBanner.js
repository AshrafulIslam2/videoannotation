import React from "react";
import { motion } from "framer-motion";

import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <motion.div
      className="homeBanner"
      initial={{ y: -600 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h1
          className="text-3xl text-center font-bold "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          A Short Introduction to Video Annotation for AI [2023]
        </motion.h1>
        <motion.p
          className="text-xl  font-light leading-[30px]  py-7 mx-6"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Find out what video annotation is and how it can be used in computer
          vision. Explore different techniques to annotate videos for AI and
          learn best practices.
        </motion.p>
      </div>
      <div className="imagediv">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          src="https://assets-global.website-files.com/5d7b77b063a9066d83e1209c/63b413df0e8909b984768684_636b93cd13f59132579e68b8_Hero%2520video%2520annotation.jpeg"
          alt=""
        />
      </div>
      <div></div>
    </motion.div>
  );
};

export default HomeBanner;
