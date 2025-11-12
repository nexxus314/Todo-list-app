import React from 'react'
import { playSound } from '../utils/sounds'

const TodoHeader = ({setFilter,onNewTaskClick,currentFilter}) => {
  return (
    <>
    

<nav className="bg-indigo-400 border-gray-200 dark:bg-indigo-400">
  <div className="max-w-screen-xl 
          mx-auto p-4 
          flex flex-row gap-3 
          items-center 
          sm:flex-row sm:justify-between sm:gap-0">

        <span className="self-center text-2xl font-mono font-semibold whitespace-nowrap dark:text-white ">
          ToDo.</span>
    
   
    {/* Filter buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`p-2 rounded-2xl ${
              currentFilter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className={`p-2 rounded-2xl ${
              currentFilter === "active"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Active
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`p-2 rounded-2xl ${
              currentFilter === "completed"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Completed
          </button>
        </div>

 <div className="flex justify-center sm:justify-end">
  
      
        <button onClick={()=>{onNewTaskClick();
          playSound("newtask");
        }
          
        }  className='text-white font-mono p-2 rounded-lg hover:shadow 2x1 hover:bg-indigo-500'
        >
          
          New Task</button>
          </div>
      
      </div>
</nav>

    </>
  )
}

export default TodoHeader