import React from "react";
import Cards from "./Cards";

const TaskInput = ({tasks}) => {
  return (
    <>
    <div className="flex flex-row">
      {tasks.map((task)=>(

         <Cards key={task.id}>
      <div className="flex flex-col text-center items-center gap-3 p-3">
        <h3 class="text-lg font-bold text-gray-800 font-mono">{task.taskname}</h3>
        <p class=" text-xs font-mono font-medium uppercase text-gray-500 ">
           {task.taskinfo}
        </p>
        <input type="checkbox" className="w-6 h-6" />
      </div>
    </Cards>



      ))}
   
    
    </div>
    
    </>
  );
};

export default TaskInput;
