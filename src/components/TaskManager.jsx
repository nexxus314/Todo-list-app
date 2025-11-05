import NewTask from "./NewTask";
import TaskInput from "./TaskInput";
import TodoHeader from "./TodoHeader";
import { useEffect, useReducer, useState } from "react";

import React from "react";

//reducer fn which takes the state and action as props/args 
function taskReducer(state,action){

  switch(action.type){
    case 'ADD_TASK': return [...state,action.payload];
    //... makes a new state array and adds the new action payload in it
    case 'DELETE_TASK': return state.filter(task=>task.id!==action.payload);
//filters out the task and if the actionpayload(id) is not what is inside the task array, it creates a new task array without that specific id of task
  case 'TOGGLE_TASK': return  state.map(task=> task.id===action.payload?{...task,completed:!task.completed}:task);
//loops/maps through the available task array and uses a ternary operation where if th id matches the payload, then its completed status is flipped and if it doesnt then its left without any change.
  default:
    return state;
 
  }
}
//can group different if this-then that state changes into one reducer function which has multiple cases and the reducer decides what to do during a certain scenario

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

  const [tasks, dispatch] = useReducer(taskReducer,savedTasks);
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
    dispatch({type: "ADD_TASK",payload:task});
  };
  //uses the prev callback function and makes a new array using ... and then spreads the previous prev values and then adds the new task at the end of the newly created array
  const toggleTaskCompletion = (id) => {
    dispatch({type:"TOGGLE_TASK",payload:id})
      //maps or loops throught the available tasks and then if the task id mathces, it would flip its value
    
  };
  const deleteTask = (id) => {
    dispatch({type:"DELETE_TASK",payload: id})
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
