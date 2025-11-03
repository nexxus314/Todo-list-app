import NewTask from "./NewTask";
import TaskInput from "./TaskInput";
import TodoHeader from "./TodoHeader";
import { useEffect, useState } from "react";

import React from "react";

const TaskManager = () => {
  let savedTasks = [];
  try {
    const stored = localStorage.getItem("tasks");
    savedTasks = stored ? JSON.parse(stored) : [];
    //here the json.parse converts the stored json.string into the normal array and it can be used to show the data 
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    savedTasks = [];
  }


  //throw and catch block since the error parsing storage kept spamming
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
      {showNewTask && (
        <NewTask addTask={addTask} onClose={() => setShowNewTask(false)} />
      )}
      <TaskInput
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default TaskManager;
