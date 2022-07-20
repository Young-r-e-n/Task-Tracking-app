import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

function App() {

  const[tasks,setTasks] = useState(
   [
    {
      id: 1,
      text: "Code in Python",
      day: "Monday",
      reminder: false
    },
    {
      id: 2,
      text: "Code in Jav",
      day: "Tuesday",
      reminder: false
    },
    {
      id: 3,
      text: "Code in Python",
      day: "Monday",
      reminder: false
    }

   ]
    )
    //delete task 
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
     <Header  />
     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask}/>
 : "No Tasks to show"} </div>
  );
}

export default App;
