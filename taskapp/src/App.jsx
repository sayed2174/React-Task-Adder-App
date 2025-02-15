import { useState } from "react"
import "./App.css"
import Toaster from "./Toast";

function App() {
  let [task,setTask] = useState("");
  let [date,setDate] = useState("");
  let [time,setTime] = useState("");
  let [tasks,setTasks] = useState([]);
  let [showToast,setShowToast] = useState(false);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const period = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  };

  const addTask = (event)=>
  {
    event.preventDefault();
    if(task.trim() === "")
    {
      alert("Please Enter Some Task to Add");
      return;
    }
    const dt = `${formatTime(time)} & ${date}`;
    const jdt = `${new Date().toLocaleTimeString()} & ${new Date().toLocaleDateString()}`
    const newTask = {name:task,cdate: jdt, ddate: dt};
    
    setTasks([...tasks, newTask]);
    setShowToast(true);
    
    setTimeout(() => {
      setTime("");
      setDate("");
      setTask("");
      setShowToast(false);
      setTask("");
    }, 1000);
    
  }

  const removeTask = (index)=>{
    setTasks(tasks.filter((_,i)=> i!=index));
  }

  const msg=`Task "${task}" Added Successfully and if wants take action immediatly`;
  
  return (
    <div className="container-fluid text-bg-info flex items-center justify-center flex-col p-4 m-2 w-100 max-w-3xl mx-auto">
        <form onSubmit={addTask} className="mb-4 flex flex-col w-full">
          <label htmlFor="task" className="mb-1"> Task Name:</label> &nbsp;
          <input type="text" placeholder="Enter Task name" value={task} onChange={(e) => setTask(e.target.value)} required className="border p-2 rounded w-full mb-2"/>
          &nbsp;
          <label htmlFor="date" className="mb-1"> Select Date of DeadLine:</label> &nbsp;
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="border p-2 rounded w-full mb-2"/>
          &nbsp;
          <label htmlFor="time" className="mb-1"> Select Time of DeadLine:</label> &nbsp;
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required className="border p-2 rounded w-full mb-2"/>
          <br />
          <br />
          <button type="submit" className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded"> Add Task</button>
        </form>

        <table className="table table-border border-danger table-hover table-striped text-center border-collapse border border-black-400 w-full">
          <thead >
            <tr >
              <th className="border-5 border-gray-400 px-4 py-2">Task Name</th>
              <th className="border-5 border-gray-400 px-4 py-2">Time and Date of Add</th>
              <th className="border-5 border-gray-400 px-4 py-2">DeadLine Date and Time</th>
              <th className="border-5 border-gray-400 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody >
            {tasks.map((val,index)=>
            (
              <tr key={index} className="text-align-center">
                <td className="border-5 border-gray-400 px-4 py-2 ">{val.name}</td>
                <td className="border-5 border-gray-400 px-4 py-2 ">{val.cdate}</td>
                <td className="border-5 border-gray-400 px-4 py-2 ">{val.ddate}</td>
                <td className="border-5 border-gray-400 px-4 py-2"><button onClick={()=> removeTask(index) } className="btn btn-primary bg-red-500 text-white px-2 py-1 rounded">Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        {showToast && (
        <div className="border-4 flex item-center justify-center p-4 m-5 w-1280">
          <Toaster msg={msg}/>
        </div>
         )}
      
    </div>

  )
}

export default App