import React from "react";
import Cards from "./Cards";
import { IoMdTrash } from "react-icons/io";
import { motion,AnimatePresence } from "framer-motion";


const TaskInput = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  //displays this p if no of tasks is none
  if (!tasks || tasks.length == 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl font-medium">
          No Tasks Available Yet.
        </p>
      </div>
    );
  }

  return (
    /*tasks.map loops throught the task as argument and then fills the dynamic spots inside the card*/

    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center">
        <AnimatePresence>
          {tasks.map((task) => (
           <motion.div
  key={task.id}
  layout  // helps Framer Motion auto-animate layout shifts
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>

              <Cards key={task.id} className="group">
                <div className="flex flex-col text-center items-center gap-3 p-3">
                  <h3
                    className={`text-3xl font-bold ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-indigo-800"
                    }`}
                  >
                    {task.taskname}
                  </h3>
                  <p
                    className={` text-xl font-medium text-gray-500 ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {task.taskinfo}
                  </p>

                  <div className="flex flex-row gap-3">
                    <motion.input
                      type="checkbox"
                      className="w-6 h-6 mt-6 accent-indigo-500 cursor-pointer"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                       whileTap={{ scale: 0.8 }}
  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    />
                    <motion.button

                     whileHover={{ scale: 1.2, rotate: 10, color: "#ef4444" }} // subtle hover tilt
  whileTap={{ scale: 0.8, rotate: -10 }} // shrink when clicked
                      onClick={() => deleteTask(task.id)}
                      className="mt-5"
                    >
                      <IoMdTrash size={30} />
                    </motion.button>
                  </div>
                </div>
              </Cards>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TaskInput;
