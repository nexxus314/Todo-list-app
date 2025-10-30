import React, { useState } from "react";
import Cards from "./Cards";

const NewTask = () => {
  const [newTask, setnewTask] = useState({
    taskname: "",
    taskinfo: "",
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setnewTask((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl min-h-[70vh] flex flex-col justify-center">
        <h2 className="text-2xl text-indigo-800 text-center font-bold font-mono ">
          Add Your Tasks
        </h2>
        <form className="flex flex-col items-center gap-6">
          <input
            className="p-2 font-semibold outline-black shadow-2xl rounded-lg mt-10"
            type="text"
            name="taskname"
            value={newTask.taskname}
            onChange={handlechange}
            placeholder="Task Name"
          />
          <input
            className="p-4 font-semibold outline-red-800 shadow-2xl rounded-lg mb-10"
            type="text"
            placeholder="Task Description"
            value={newTask.taskinfo}
            onChange={handlechange}
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
