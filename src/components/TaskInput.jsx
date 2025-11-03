import React from "react";
import Cards from "./Cards";
import { IoMdTrash } from "react-icons/io";

const TaskInput = ({tasks,toggleTaskCompletion,deleteTask}) => {

 if(!tasks || tasks.length==0){
  return (
    <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl font-medium">No Tasks Available Yet.</p>
    </div>
  )
 };
  
  return (
    <>
    
    <div className="flex flex-row">
      {tasks.map((task)=>(

         <Cards key={task.id} className="group">

      <div className="flex flex-col text-center items-center gap-3 p-3">
        <h3 className={`text-3xl font-bold ${
                task.completed ? "line-through text-gray-400" : "text-indigo-800"
              }`}>{task.taskname}</h3>
        <p className={` text-xl font-medium text-gray-500 ${ task.completed ? "line-through text-gray-400" : "text-gray-500"
              }`}>
           {task.taskinfo}
        </p>

        <div className="flex flex-row gap-3">

            <input
              type="checkbox"
              className="w-6 h-6 mt-6 accent-indigo-500 cursor-pointer"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <button
              onClick={() => deleteTask(task.id)}
              className="mt-5"
            >
             <IoMdTrash size={30} />
            </button>
          </div>
          </div>
          
    </Cards>
    
    
      ))}
    </div>
    
    </>
  );
};

export default TaskInput;
