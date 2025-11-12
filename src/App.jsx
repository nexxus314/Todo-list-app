
import TodoHeader from './components/TodoHeader'
import TaskManager from './components/TaskManager'
import { useEffect } from 'react';
import { preloadSound } from './utils/sounds';




const App = () => {
  useEffect(() => {
  preloadSound("done", "/sounds/done.mp3");
  preloadSound("delete", "/sounds/delete.mp3");
  preloadSound("newtask", "/sounds/newtask.mp3");
  preloadSound("submit","/sounds/submit.mp3");
}, []);

  
 
  return (
    <>
  
  
   <TaskManager />
   </>
  )
}

export default App