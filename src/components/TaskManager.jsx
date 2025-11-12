import NewTask from "./NewTask";
import TaskInput from "./TaskInput";
import TodoHeader from "./TodoHeader";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import React from "react";

const TaskManager = () => {
  let savedTasks = [];
  //initialize the tasks array by none first
  try {
    const stored = localStorage.getItem("tasks");
    //if there are any stored elements,- parse the stringified json
    savedTasks = stored ? JSON.parse(stored) : [];
    //here the json.parse converts the stored json.string into the normal array and it can be used to show the data 
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    savedTasks = [];
  }


  //throw and catch block so that if data stored goes corrupted and it threw an error, we could catch it

  const [tasks, setTasks] = useState(savedTasks);
  const [showNewTask, setShowNewTask] = useState(false);
  //used to hide the newtask form so that it doesnt stay there
  const [filter, setFilter] = useState("all");
//.filter creates a new array with all the elements which passes the test
  const filteredTasks = tasks.filter((task) => {
    if (filter == "active") return !task.completed;
    if (filter == "completed") return task.completed;
    return true;
  });

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };
  //uses the prev callback function and makes a new array using ... and then spreads the previous prev values and then adds the new task at the end of the newly created array
  const toggleTaskCompletion = (id) => {
    setTasks(
      (prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      //maps or loops throught the available tasks and then if the task id mathces, it would flip its value
    );
  };
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  //filters the task using id and then removes it from the current array of tasks

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //here the [tasks] is a dependancy array and the code inside useeffect runs whenever the tasks is being changed
  //and on top of that localstorage.setitem stores the "tasks" array into browser local storage in a json string format using stringify

  return (
    <>
      <TodoHeader
        onNewTaskClick={() => setShowNewTask((prev) => !prev)}
        setFilter={setFilter}
        currentFilter={filter}
      />
      <AnimatePresence>
      {showNewTask && (<motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
        <NewTask addTask={addTask} onClose={() => setShowNewTask(false)} />
          </motion.div>
      )}
      </AnimatePresence>
      <TaskInput
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default TaskManager;
