import { useState,useEffect } from 'react';
import axios from 'axios';
import { FaUserLock } from "react-icons/fa";
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CalorieCount from './CalorieCount';
import { IoFitnessSharp } from "react-icons/io5";

export default function Login() {
    const navigate = useNavigate();

    const [addTask, setAddTask] = useState("");
    const [tasks,setTasks] = useState([]);
    const [showFinishedTasks, setShowFinishedTasks] = useState(false);
    const [goalState, setGoalState] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
  
    useEffect(()=>{
      let taskString = localStorage.getItem("tasks");
      if(taskString){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        setTasks(tasks);
      }
    },[])
  
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    // Calculate the time until midnight to set the next update
  const now = new Date();
  const msUntilMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  ) - now;

  const timeoutId = setTimeout(() => {
    updateDate();
    const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000); // Update every 24 hours
    // Cleanup function for interval
    return () => clearInterval(intervalId);
  }, msUntilMidnight);

  const saveToLS = () =>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }


  const handleAdd = () =>{
    setTasks([...tasks,{id: uuidv4(), addTask, isCompleted:false, goalType:"none"}]);
    setAddTask("");
    saveToLS();
  }

  const handleEdit = (event,id) =>{

    let taskToEdit = tasks.find(item => item.id === id);
    if (taskToEdit) {
      setAddTask(taskToEdit.addTask);
    }
    let updatedTasks = tasks.filter(item => item.id !== id);
    setTasks(updatedTasks);
    saveToLS();
  }

  const handleDelete = (event,id) =>{
    let newTasks = tasks.filter(item=>{
      return item.id !== id;
    });
    setTasks(newTasks);
    saveToLS();
  }


  const handleOnChange = (event) =>{
    setAddTask(event.target.value);
  }

  const handleCheckbox = (event) =>{
    let id = event.target.name;
    let index = tasks.findIndex(item=>{
      return item.id === id;
    })
    

    let newTasks = [...tasks];
    
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    saveToLS();
  }


  const handleFinishedTasks = () => {
    setShowFinishedTasks(!showFinishedTasks);
  };

  const displayedTasks = showFinishedTasks ? tasks.filter(item => item.isCompleted) : tasks;

//   const typeOfGoal = (event,id, goalType) =>{
//     let index = tasks.findIndex(item => item.id === id);
//     let newTasks = [...tasks];
//     newTasks[index].goalType = goalType;
//     setTasks(newTasks);
//     // saveToLS();
//   }

//   const getButtonClass = (goalType, currentGoal) => {
//     if (goalType === currentGoal) {
//       switch (currentGoal) {
//         case 'short':
//           return 'bg-red-600';
//         case 'mid':
//           return 'bg-yellow-600';
//         case 'long':
//           return 'bg-blue-600';
//         default:
//           return 'bg-purple-600';
//       }
//     }
//     return 'bg-purple-600';
//   };

    return (
        <>
            <div className='bg-black text-white font-space border-[#212121] '>
                <div className='bg-black text-white w-[95%] p-5 my-auto'>
                    <div className='w-full mx-auto  p-4 border-[#212121] rounded-lg border-2'>
                    <CalorieCount/>
                        <div className=' text-center mt-24 mb-5'>
                        <div className='flex justify-center'>
                            <h1 className='text-red-600 text-3xl mx-3 mt-1 '><IoFitnessSharp /></h1>
                            <h1 className='text-2xl font-bold mb-2'>Add Your Fitness Plan</h1>
                        </div>

                            <p className='text-lg mb-4'>Today's Date: {currentDate.toDateString()}</p>

                            <input className=" w-full rounded-full border border-gray-400 text-black p-2 px-4 focus:outline-none focus:ring focus:border-pink-500 transition-all " type="text" onChange={handleOnChange} value={addTask}/>
                                
                            <button onClick={handleAdd} disabled={addTask.length<=2} className=' bg-[#CCFF33] hover:bg-[#b2e31d] text-black p-3 py-1 rounded-md disabled:bg-[#c9e575] font-bold block sm:w-full w-9/12 mx-auto mt-2'>Save</button>

                            <button onClick={handleFinishedTasks} className=' text-lg bg-[#CCFF33] hover:hover:bg-[#b2e31d] px-2 ml-4  rounded-md mt-2 mb-4 font-bold text-black'>
                            {showFinishedTasks ? "See All Tasks" : "See Finished Tasks"}
                            </button>
                            <div className= " h-[1px] opacity-25 w-[90%] mx-auto bg-black"></div>
                            <h2 className="text-xl mb-6 font-medium ml-4">Your List</h2>
                            <div className="ml-4">

                                {displayedTasks.length===0 && <div className='my-5'>No tasks to display</div>}

                                {displayedTasks.map(item=>{
                        
                                    
                                return <div className=" flex sm:w-full md:min-w-[70%] my-1 justify-between">
                                    <div className='flex gap-5'>

                                        <input type="checkbox" checked={item.isCompleted?true:false}  onChange={handleCheckbox} name= {item.id} id="" />

                                        <div className={`my-2 ${item.isCompleted?"line-through":""}`}>{item.addTask}</div>
                                    </div>


                            <div className="flex flex-wrap w-1/2">
                                <button onClick={(event)=>handleEdit(event,item.id)} className='   bg-[#CCFF33] hover:bg-[#b2e31d] text-black p-2 py-1 rounded-md mx-2 my-1 font-bold k'><FaRegEdit /></button>

                                <button onClick={(event)=>{handleDelete(event,item.id)}} className=' bg-[#CCFF33] hover:bg-[#b2e31d] text-black p-2 py-1 rounded-md mx-2 my-1 md:py-0px font-bold' name={item.id}><MdDelete /></button>
                            </div>
                            </div>
                            })}
                        </div>
                    </div>

                    </div>
                </div>
            </div>

        </>
    )
}
