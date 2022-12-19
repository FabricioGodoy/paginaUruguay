import React from "react";
import { motion } from "framer-motion";

export const HomeFramerMotion = () => {
  return (
    <div className="gilada">
      <motion.h1
      initial={{
          x: -200,
          color: "#ff0000"
        }}
        transition={{ duration: 1 }}
        animate={{
          x: 200,
          color: "#000",
          rotate: 360
        }}
        className="TextoFramermotion"
      >
        OFERTA!
      </motion.h1>
      
    </div>
  );
};
