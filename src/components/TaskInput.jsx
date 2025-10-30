import React from "react";
import Cards from "./Cards";

const TaskInput = () => {
  return (
    <>
    <div className="flex flex-row ">
    <Cards>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className=" text-center items-center gap-5 p-3">
        <h3 class="text-lg font-bold text-gray-800 font-mono">Card Title</h3>
        <p class=" text-xs font-mono font-medium uppercase text-gray-500 ">
          Card Subtitle
        </p>
        <input type="checkbox" className="w-6 h-6" />
      </div>


      
      </div>
    </Cards>

      <Cards>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col text-center items-center gap-5 p-3">
        <h3 class="text-lg font-bold text-gray-800 font-mono">Card Title</h3>
        <p class=" text-xs font-mono font-medium uppercase text-gray-500 ">
          Card Subtitle
        </p>
        <input type="checkbox" className="w-6 h-6" />
      </div>


      
      </div>
    </Cards>
    </div>
    </>
  );
};

export default TaskInput;
