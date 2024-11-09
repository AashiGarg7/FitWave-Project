import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { authselector } from "../redux/slices/slice";
import { useNavigate } from "react-router-dom";
import { helix} from 'ldrs'
const parseWorkoutPlan = (response) => {
    const sections = response.trim().split(/\n(?=[A-Za-z])/);

    const parsedData = {};
    const validKeys = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Additional Tips',
        'Additional tips'
    ];

    sections.forEach(section => {
        const lines = section.trim().split('\n');
        const dayName = lines.shift().trim().replace(/:$/, '');
        const normalizedKey = dayName.toLowerCase();

        if (validKeys.some(validKey => validKey.toLowerCase() === normalizedKey)) {
            if (normalizedKey === 'additional tips') {
                parsedData['Additional Tips'] = lines.map(tip => {
                    return tip.trim().replace(/^[\*\+\d\.\s]+/, '');
                }).filter(tip => tip !== '');
            } else {
                parsedData[dayName] = lines.map(line => {
                    const [type, ...details] = line.split(':');
                    let cleanedDetails = details.join(':').trim()
                        .replace(/^[\*\+\d\.\s]+/, '')
                        .replace(/^[^\w\s]+/, '');
                    cleanedDetails = cleanedDetails.replace(/^[^a-zA-Z\d\s]+/, '');

                    return { type: type.trim().replace(/^[\*\+\d\.\s]+/, ''), details: cleanedDetails };
                }).filter(entry => entry.type && entry.details);
            }
        }
    });

    return parsedData;
};

export default function Aigenerated() {
    helix.register();
    const state = useSelector(authselector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate("/login");
        }
    }, [state, navigate]);

    const [data, setData] = useState();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [goal, setGoal] = useState('');
    const [gender, setGender] = useState('');
    const [loader, setLoader] = useState('');

    const validateData = (data) => {
        const requiredKeys = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Additional Tips',
        ];
        for (let key of requiredKeys) {
            let normalizedKey = key;
            if (key === 'Additional Tips') {
                normalizedKey = Object.keys(data).find(k => k.toLowerCase() === 'additional tips');
            }
            if (!normalizedKey || !data[normalizedKey] || data[normalizedKey].length === 0) {
                return false;
            }
            if (Array.isArray(data[normalizedKey])) {
                for (let item of data[normalizedKey]) {
                    if (typeof item === 'object') {
                        if (!item.type || item.type.trim() === '') {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    };

    const handleclick = async () => {
        try {
            let data1;
            let structuredPlan;
            let isDataValid = false;
            setLoader(true);
            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            while (!isDataValid) {
                await delay(Math.random() * 1000 + 1000);
                data1 = await axios.post('http://localhost:3000/api/ai',{
                    height:height,
                    weight:weight,
                    goal: goal,
                    gender: gender
                }, {
                    withCredentials: true
                });
                structuredPlan = parseWorkoutPlan(data1.data);
                isDataValid = validateData(structuredPlan);
            }
            setLoader(false);
            setData(structuredPlan);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const isFormValid = () => {
        return height.trim() !== '' && weight.trim() !== '' && goal.trim() !== '' && gender.trim() !== '';
    };

    return (
        <div className="bg- from-gray-900 via-teal-900 to-black text-white font-space custom-scrollbar min-h-[100%] h-fit">
            <div className="flex justify-center items-center mt-6">
                <h1 className="text-3xl font-extrabold font-manrope leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">Personalized Fitness Plan Crafted by AI</h1>
            </div>
            <div className="flex justify-center place-items-center mt-10 gap-4">
                <input 
                    type="text" 
                    placeholder="Height in inches" 
                    className="rounded p-2 bg-transparent border-2 border-purple-600 outline-none placeholder:text-white text-white" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Weight in Kgs." 
                    className="rounded p-2 bg-transparent border-2 border-pink-600 outline-none placeholder:text-white text-white" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                    required
                />
                <div className="flex gap-4 justify-center place-items-center">
                    <div>
                        <select 
                            className="pl-16 pr-16 bg-transparent border-2 border-purple-600 rounded p-2 outline-none"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                        >
                            <option value="" className="bg-[#121212] text-white">Select Goal</option>
                            <option value="bulk" className="bg-[#121212] text-white">Bulk</option>
                            <option value="cut" className="bg-[#121212] text-white">Cut</option>
                        </select>
                    </div>
                    <select 
                        className="pl-16 pr-16 bg-transparent border-2 border-pink-600 rounded p-2 outline-none"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="" className="bg-[#121212] text-white">Select Gender</option>
                        <option value="male" className="bg-[#121212] text-white">Male</option>
                        <option value="female" className="bg-[#121212] text-white">Female</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <div className="relative inline-flex group">
                    <div
                        className="outline-none absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
                    ></div>
                    <button 
                        onClick={handleclick}
                        className={`outline-none relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-400 ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isFormValid()}
                    >
                        Generate with Ai
                    </button>
                </div>
            </div>
           {loader?<div className='bg-black flex justify-center place-content-center place-items-center font-space custom-scrollbar mt-20 h-fit text-white' >
                <l-helix
                    size="80"
                    stroke="4"
                    speed="1.4"
                    color="rgb(147 51 234)"
                ></l-helix>
            </div>: <div className="mt-6">
                {data && Object.keys(data).map((key) => (
                    <div key={key} className="flex flex-col items-start ml-[30%] mb-4">
                        <h1 className="text-2xl font-bold text-[#CCFF33] mb-3">{key}</h1>
                        <ul className="space-y-2">
                            {Array.isArray(data[key]) && data[key]
                                .filter(item => item && item !== "")
                                .map((item, index) => (
                                    typeof item === 'string' ? (
                                        <li key={index} className="flex gap-4 text-gray-300"> <FaArrowRightLong className="text-lg mt-1 text-indigo-600" />{item}</li>
                                    ) : (
                                        <li key={index} className="flex gap-4">
                                            <FaArrowRightLong className="text-lg mt-1 text-indigo-600" />
                                            <div className="gap-1 flex">
                                                {item.type}
                                                {item.details && <span className="text-gray-300">: {item.details}</span>}
                                            </div>
                                        </li>
                                    )
                                ))}
                        </ul>
                    </div>
                ))}
            </div>}
        </div>
    );
}
