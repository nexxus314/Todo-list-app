import NewTask from "./NewTask";
import TaskInput from "./TaskInput";
import TodoHeader from "./TodoHeader";
import { useState } from "react";

import React from 'react'

const TaskManager = () => {
    const[showNewTask,setShowNewTask]=useState(false);


    const [tasks,setTasks]=useState([]);

    const addTask = (task) => {
        setTasks(prev=>[...prev,task])
    }
  return (
    <>
     <TodoHeader onNewTaskClick={()=>setShowNewTask((prev)=>!prev)}/>
    {showNewTask &&<NewTask  addTask={addTask} onClose={()=>setShowNewTask(false)} />}
    <TaskInput tasks={tasks} />

    </>
  )
}

export default TaskManager