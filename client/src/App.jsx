import BarChart from "./components/BarChart"
import DonutChart from "./components/PieChart"
// import SideBar from "./components/SideBar"
// import TopBar from "./components/TopBar"
import Trainercard from "./components/TrainerCard";
import { FaAngleRight } from "react-icons/fa6";
import { IoFitness } from "react-icons/io5";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import Calendar from "./components/StreakCalendar";
import image from '/Image.png'
import './App.css';
import { useEffect} from "react";
import { useSelector } from "react-redux";
import { authselector } from "./redux/slices/slice";
import { useNavigate } from "react-router-dom";
function App() {
  const state=useSelector(authselector);
  const navigate=useNavigate();
      
  const handleNavigateToFitnessForBeginners = () => {
    navigate('/FitnessForBeginners');
  };

  const handleNavigateTo75HardChallenge =()=>{
    navigate('/75HardChallenge');
  };
  const handleNavigateToFatToFit =()=>{
    navigate('/FatToFit');
  };
  useEffect(()=>{
    if(!state){
      navigate("/login");
    }
  },[])
  return (
    <div className='text-xl text-[#CCFF33] min-h-[100%] h-fit bg-black flex font-space custom-scrollbar'>
      <div className="w-full flex flex-col">
        <div className="flex p-2 flex-grow">
          <div className="w-[40%] p-4 h-[270px]">
            <div className="flex justify-between">
              <h1 className="text-2xl text-white font-space font-bold mb-4">Activity</h1>
            </div>
            <BarChart />
          </div>
          <div className="w-[40%] p-4 custom-scrollbar">
            <div className="flex justify-between">
              <h1 className="text-2xl text-white font-space font-bold mb-4">Overview</h1>
            </div>
            <div className="flex ">
              <DonutChart />
              <div className="bg-[#121212] pr-5 pl-5 p-2 rounded-r-xl">
                <div>
                  <div className="flex gap-4 mt-1">
                    <h1 className="h-3 w-3 rounded-full bg-[#CCFF33] mt-1"></h1>
                    <h1 className="text-white text-base font-space">Calories burn</h1>
                  </div>
                  <div className="flex gap-4 justify-between border-b-2 border-[#313131] pt-2 ">
                    <h1 className="text-white text-base font-space font-medium">33.5%</h1>
                    <h1 className="text-sm mt-1 font-space font-medium">+1,25%</h1>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4 mt-5">
                    <h1 className="h-3 w-3 rounded-full bg-[#45ffa6] mt-1"></h1>
                    <h1 className="text-white text-base font-space">Protien</h1>
                  </div>
                  <div className="flex gap-4 justify-between border-b-2 border-[#313131] pt-2 ">
                    <h1 className="text-white text-base font-space font-medium ">23.02%</h1>
                    <h1 className="text-sm mt-1 font-space font-medium text-[#45ffa6]">+3,43%</h1>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4 mt-5">
                    <h1 className="h-3 w-3 rounded-full bg-[#9c9c9c] mt-1"></h1>
                    <h1 className="text-white text-base font-space">Carbs</h1>
                  </div>
                  <div className="flex gap-4 justify-between border-b-2 border-[#313131] pt-2">
                    <h1 className="text-white text-base font-space font-medium">11.24%</h1>
                    <h1 className="text-sm mt-1 font-space font-medium text-[#9c9c9c]">+2,12%</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[30%] pt-4 pr-4 ">
            <Calendar />
          </div>
        </div>
        {/* Section - 2 */}
        <div className="pl-10 flex gap-4 mt-10">
          <div className="h-fit bg-[#121212] w-[30%] rounded-xl">
            <div className="p-2 w-full flex justify-between">
              <h1 className="text-2xl text-white font-space font-bold m-2">Trainer</h1>
              <div className="flex gap-2 m-2 text-[#8a8787] cursor-pointer">
                <h2>View all </h2>
                <FaAngleRight className="mt-1" />
              </div>
            </div>
            <div className="flex gap-4 p-4 pt-2">
              <Trainercard color={"#CCFF33"} name={"Arnold"} desc={"Fitness Trainer"} />
              <Trainercard color={"#45ffa6"} name={"John"} desc={"Yoga Expert"} />
            </div>
          </div>
          <div className="h-fit bg-[#121212] w-[30%] rounded-xl">
            <div className="p-2 w-full flex justify-between">
              <h1 className="text-2xl text-white font-space font-bold m-2">Today`s Workout</h1>
              <div className="flex gap-2 m-2 text-[#8a8787] cursor-pointer">
                <h2 onClick={()=>{
                            navigate("/todo");
                            }}>View all </h2>
                <FaAngleRight className="mt-1" />
              </div>
            </div>
            <div className="flex gap-6 p-4 pt-2 ">
              <div>
                <div className="bg-[#05924e] rounded-xl h-full p-4 flex-col justify-center place-content-center place-items-center">
                  <IoFitness className="text-white text-5xl ml-4" />
                  <h1 className="text-white font-space">Workout</h1>
                  <h1 className="text-white text-sm font-space">16 Aug 2024</h1>
                </div>
              </div>
              <div className="rounded-r-xl">
                <div>
                  <div className="flex gap-4">
                    <h1 className="h-3 w-3 rounded-full bg-[#CCFF33] mt-2"></h1>
                    <h1 className="text-white font-space text-base">Squats</h1>
                  </div>
                  <div className="flex gap-4 justify-between pt-0 p-2 ml-4">
                    <h1 className="text-white font-space font-medium text-sm">10 seats of squats</h1>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4">
                    <h1 className="h-3 w-3 rounded-full bg-[#45ffa6] mt-2"></h1>
                    <h1 className="text-white font-space text-base">Low Lung</h1>
                  </div>
                  <div className="flex gap-4 justify-between pt-0 p-2 ml-4">
                    <h1 className="text-white font-space font-medium text-sm">25 seats of lings</h1>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4">
                    <h1 className="h-3 w-3 rounded-full bg-[#ee33ff] mt-2"></h1>
                    <h1 className="text-white font-space text-base">Batting rope</h1>
                  </div>
                  <div className="flex gap-4 justify-between pt-0 p-2 ml-4">
                    <h1 className="text-white font-space font-medium text-sm">20 seats of batting</h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit bg-[#121212] w-[35%] rounded-xl">
            <div className="p-2 w-full flex justify-between">
              <h1 className="text-2xl text-white font-space font-bold m-2">Recommended Activity</h1>
            </div>
            <div className="p-4 pt-2">
              <div className="flex gap-4 justify-between w-full">
                <div className="p-2 bg-[#CCFF33] rounded-lg">
                  <MdOutlineFitnessCenter className="text-black" />
                </div>
                <button onClick={handleNavigateToFitnessForBeginners} className="flex flex-row items-center justify-start w-full">
                <div className="flex justify-between w-full cursor-pointer hover">
                  <h1 className="text-white font-space text-lg">Fitness For Beginners</h1>
                  <FaAngleRight className="mt-1 text-white" />
                </div>
                </button>
              </div>
            </div>
            <div className="p-4 pt-2">
              <div className="flex gap-4 justify-between w-full">
                <div className="p-2 bg-[#45ffa6] rounded-lg">
                  <FaPersonRunning className="text-black" />
                </div>
                <button onClick={handleNavigateTo75HardChallenge} className="flex flex-row items-center justify-start w-full" >
                <div className="flex justify-between w-full cursor-pointer hover">
                  <h1 className="text-white font-space text-lg">75 Hard Challenge</h1>
                  <FaAngleRight className="mt-1 text-white" />
                </div>
                </button>
              </div>
            </div>
            <div className="p-4 pt-2">
              <div className="flex gap-4 justify-between w-full">
                <div className="p-2 bg-[#ee33ff] rounded-lg">
                  <GrYoga className="text-black" />
                </div>
                <button onClick={handleNavigateToFatToFit} className="flex flex-row items-center justify-start w-full" >
                <div className="flex justify-between w-full cursor-pointer hover">
                  <h1 className="text-white font-space text-lg">Fat to Fit Challenge</h1>
                  <FaAngleRight className="mt-1 text-white" />
                </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* section -3 */}
        <div>
          <div className="flex justify-between pl-10 mt-8 pr-10">
            <h1 className="text-white text-2xl font-bold">Your Goals</h1>
            <div className="flex gap-4 text-[#9c9696] cursor-pointer">
              <h2>View all</h2>
              <FaAngleRight className="mt-1" />
            </div>
          </div>
          <div className="flex mt-4 bg-[#121212] justify-between p-4 rounded-xl mr-10 gap-4 ml-10">
            <div className="flex gap-6 bg-[#CCFF33] w-[33%] p-4 pb-2 rounded-lg">
              <div className="h-16 w-20 bg-white rounded-lg">
                <img src={image} />
              </div>
              <div className="w-full">
                <h1 className="text-lg text-black font-bold mb-2">Lose Weight to 60Kg</h1>
                <div className="rounded-2xl w-full h-2 bg-white flex-col mb-1 justify-center place-content-center">
                  <div className="rounded-2xl bg-[#45ffa6] w-[50%] h-2 "></div>
                </div>
                <div className="flex justify-end text-black text-lg">
                  <h1>50%</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-6 bg-[#45ffa6] w-[33%] p-4 pb-2 rounded-lg">
              <div className="h-16 w-20 bg-white rounded-lg">
                <img src={image} />
              </div>
              <div className="w-full">
                <h1 className="text-lg text-black font-bold mb-2">Do 150 WorkOuts in a year</h1>
                <div className="rounded-2xl w-full h-2 bg-white flex-col mb-1 justify-center place-content-center">
                  <div className="rounded-2xl bg-orange-400 w-[33%] h-2 "></div>
                </div>
                <div className="flex justify-end text-black text-lg">
                  <h1>33%</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-6 bg-[#ee33ff] w-[33%] p-4 pb-2 rounded-lg">
              <div className="h-16 w-20 bg-white rounded-lg">
                <img src={image} />
              </div>
              <div className="w-full">
                <h1 className="text-lg text-black font-bold mb-2">Running Challenge</h1>
                <div className="rounded-2xl w-full h-2 bg-white flex-col mb-1 justify-center place-content-center">
                  <div className="rounded-2xl bg-green-400 w-[70%] h-2 "></div>
                </div>
                <div className="flex justify-end text-black text-lg">
                  <h1>70%</h1>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App
