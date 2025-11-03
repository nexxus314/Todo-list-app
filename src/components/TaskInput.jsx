import React from "react";
import Cards from "./Cards";

const TaskInput = ({tasks,toggleTaskCompletion,deleteTask}) => {
  return (
    <>
    <div className="flex flex-row">
      {tasks.map((task)=>(

         <Cards key={task.id}>
      <div className="flex flex-col text-center items-center gap-3 p-3">
        <h3 className={`text-lg font-bold text-gray-800 ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}>{task.taskname}</h3>
        <p className={` text-xs font-medium uppercase text-gray-500 ${ task.completed ? "line-through text-gray-400" : "text-gray-500"
              }`}>
           {task.taskinfo}
        </p>
        <input type="checkbox" className="w-6 h-6"
        checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)} />
        <button onClick={()=>deleteTask(task.id)} className="text-sm font-bold mt-3 bg-indigo-400 p-1 rounded-lg hover:bg-indigo-600">Delete Task.</button>

      </div>


    </Cards>
      ))}
    </div>
    
    </>
  );
};

export default TaskInput;
