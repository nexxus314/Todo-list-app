import React from "react";
import { motion,AnimatePresence } from "framer-motion";

const Cards = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // bounce slightly on hover
      whileTap={{ scale: 0.95 }} // compress slightly when clicked
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white border border-gray-200 rounded-lg 
                 m-3 w-90 shadow-md 
                 transform hover:shadow-xl transition-shadow duration-300 "
    >
      {children}
    </motion.div>
  );
};

export default Cards;
