import {useEffect, useState } from "react"
import '../App.css';
import { useSelector } from "react-redux";
import { authselector } from "../redux/slices/slice";
import { useNavigate } from "react-router-dom";
export default function SetUpGoals() {
    const state=useSelector(authselector);
    const navigate=useNavigate();
    useEffect(()=>{
      if(!state){
        navigate("/login");
      }
    },[])
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [color, setColor] = useState("");
    console.log(color);
    function handleSubmit() {
        if (value.trim() !== "") {
            setData([...data, value]);
            setValue("");
        }
    }

    function handleRemove(index) {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    }
    return (
        <div className="bg-black min-h-[100%] h-fit text-white font-space p-10 custom-scrollbar" style={{ maxHeight: '400px' }}>
            <div className="flex flex-col justify-center place-items-center place-content-center">
                <h1 className="text-5xl text-[#CCFF33] font-bold">Set Up Goals</h1>
                <p className="text-base mt-4">Create custom workout routines and set personalized goals</p>
            </div>
            <div className="flex justify-center place-content-center place-items-center mt-10">
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-[#1ece79] text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#13a15d] transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Choose Avatar
                </label>
                <input id="file-upload" type="file" className="hidden" />
            </div>
            <div className="flex justify-center place-items-center place-content-center mt-10 gap-5">
                <h1>Choose color theme :-</h1>
                <div className="h-5 w-5 bg-[#CCFF33] rounded-full cursor-pointer" onClick={() => {
                    setColor("#CCFF33")
                }}></div>
                <div className="h-5 w-5 bg-[#45ffa6] rounded-full cursor-pointer" onClick={() => {
                    setColor("#45ffa6")
                }}></div>
                <div className="h-5 w-5 bg-[#ee33ff] rounded-full cursor-pointer" onClick={() => {
                    setColor("#ee33ff")
                }}></div>
            </div>
            <div className="flex flex-col justify-center place-content-center place-items-center">
                <input type="text" className="outline-none border-[#212121] bg-transparent h-20 w-[80%] p-4 border-b-2  text-3xl mt-4 placeholder:text-[#ffffffaf]" placeholder="Name Your Goal" />
                <input type="text" className="outline-none border-[#212121] bg-transparent h-20 w-[80%] p-4 border-b-2  text-3xl mt-4 placeholder:text-[#ffffffaf]" placeholder="Describe Your Goal" />
            </div>
            <div className="flex justify-center place-content-center place-items-center">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="outline-none border-[#212121] bg-transparent h-20 w-[70%] p-4 border-b-2  text-3xl mt-4 placeholder:text-[#ffffffaf]" placeholder="Actions to achieve Your Goal" />
                <button onClick={handleSubmit} className="bg-[#1ece79] p-3 pl-8 pr-8 rounded-lg mt-6 hover:bg-[#13a15d] text-black font-bold">Add it</button>
            </div>
            <div className="mt-6  w-[100%] flex flex-col justify-center place-content-center place-items-center">
                {data.length > 0 && data.map((d, index) => (
                    <div key={index} className="flex w-[80%] items-center justify-between mt-4 border-2 p-2 rounded-xl border-[#212121]">
                        <h2 className="text-3xl">{d}</h2>
                        <button
                            onClick={() => handleRemove(index)}
                            className="bg-[#ee2c2c] outline-none p-3 pl-8 pr-8 rounded-lg hover:bg-[#cc0000] text-white font-bold"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-end gap-5 mr-[10%] mt-4">
                <button className="bg-[#2cee7dd8] p-3 pl-8 pr-8 rounded-lg hover:bg-[#22aa5b] text-black font-bold">Save</button>
                <button className="bg-[#ee2c2c] p-3 pl-8 pr-8 rounded-lg hover:bg-[#cc0000] text-white font-bold">Cancel</button>
            </div>
        </div>
    )

}