import React from "react";

const Cards = ({ children }) => {
  return (
    <div class=" bg-white border border-gray-200 shadow-2xs rounded-xl 
    gap-4 m-5 p-4 md:p-8 w-1/6 transform transition-transform duration-300 
    hover:scale-105 hover:shadow-xl">
      {children}
    </div>
  );
};

export default Cards;
