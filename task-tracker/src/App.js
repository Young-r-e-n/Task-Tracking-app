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

  return (
    <div className="container">
     <Header  />
     <Tasks tasks = {tasks}/>
     </div>
  );
}

export default App;
