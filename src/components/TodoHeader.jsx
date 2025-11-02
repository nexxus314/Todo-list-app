import React from 'react'

const TodoHeader = ({onNewTaskClick}) => {
  return (
    <>
    

<nav className="bg-white border-gray-200 dark:bg-indigo-400">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <span className="self-center text-2xl font-mono font-semibold whitespace-nowrap dark:text-white ">
          ToDo.</span>
    
   
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      
        <button onClick={onNewTaskClick}  className='text-white font-mono p-2 rounded-lg hover:shadow 2x1 hover:bg-indigo-500'
        >
          
          <img src="" alt="" />New Task</button>
      
      </div>
    </div>
  
</nav>

    </>
  )
}

export default TodoHeader