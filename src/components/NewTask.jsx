import React, { useState } from "react";
import Cards from "./Cards";
//use usestate with newTask
const NewTask = ({addTask,onClose}) => {
  const [newTask, setNewTask] = useState({
    taskname: "",
    taskinfo: "",
  });

  const handleChange=(e)=>{

    const { name, value } = e.target;
  setNewTask((prev) => ({ ...prev, [name]: value }));
  }

  /*here in handleChange, the setnewtask carries taskname and taskinfo,
  and here ... creates a new array and copies the previous tasks into the new array along with its value
  recieved from the userinput*/
  const handleSubmit = (e) => {

    e.preventDefault();
    
    const taskObject={
      id:Date.now(),
      taskname:newTask.taskname,
      taskinfo:newTask.taskinfo,
      completed:false,
    };

    //this taskobject contains the details about the task

    addTask(taskObject);
//calls the addtask func from taskmanager
    setNewTask({ taskname: "", taskinfo: "" });
     onClose();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl min-h-[70vh] flex flex-col justify-center">
        <h2 className="text-2xl text-indigo-800 text-center font-bold font-mono ">
          Add Your Tasks
        </h2>
        <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit}>
          <input
            className="p-2 font-semibold outline-black shadow-2xl rounded-lg mt-10"
            type="text"
            name="taskname"
            value={newTask.taskname}
            onChange={handleChange}
            placeholder="Task Name"
          />
          <input
            className="p-4 font-semibold outline-red-800 shadow-2xl rounded-lg mb-10"
            type="text"
            placeholder="Task Description"
            value={newTask.taskinfo}
            onChange={handleChange}
            name="taskinfo"
          />
          <button
            type="submit"
            className="border-none font-semibold shadow-2xl text-xs text-white bg-indigo-400 p-3 rounded-lg font-mono hover:bg-indigo-800"
          >
            Add Task.
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
