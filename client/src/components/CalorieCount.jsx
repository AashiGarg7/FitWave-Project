import React, { useState } from 'react';
import axios from 'axios';
import { BsFire } from "react-icons/bs"; 
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, formState: {isSubmitting} } = useForm({mode:'onChange'});
  const [search,setSearch] = useState("");
  const [calorieData, setCalorieData] = useState('');


  const handleOnChange = (event) =>{
    setSearch(event.target.value);
  }

    const query = search;
    // const URL = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;
    // const URL = `https://cors-anywhere.herokuapp.com/https://api.calorieninjas.com/v1/nutrition?query=${query}`;
    // const URL = `http://localhost:3000/https://api.calorieninjas.com/v1/nutrition?query=${search}`;
    const URL = `https://api.calorieninjas.com/v1/nutrition?query=${search}`;

    const getData = async (e) => {
      try {
        const response = await axios.get(URL, {
          headers: {
            'X-Api-Key': 'dzzB2jwfIu6gbdl3gtm4DQ==2MHZf120qGHORZTn',
          },
        });
  
        // Process the response data
        const data = response.data.items;
        console.log(data);
        let result = '';
        let totalCalories = 0;
  
        data.forEach(item => {
          const calories = item.calories;
          result += `Calories of ${item.name}:   ${calories.toFixed(2)}\n`;
          totalCalories += calories;
        });
  
        // Append total calories at the end
        result += `Total Calories are:   ${totalCalories.toFixed(2)}`;
  
        setCalorieData(result);
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <div className="bg-black flex flex-col justify-center items-center">
      <div className=' w-full'>
        <div className='flex justify-center mt-2'>
          <h1 className='text-orange-500 text-2xl mx-3 my-1 '><BsFire /></h1>
          <h1 className="text-2xl font-bold mb-6  text-white">Calorie Intake Calculator</h1>
        </div>
        <form onSubmit={handleSubmit(getData)} className=" text-white p-8 rounded w-full">
          <input className=" w-full rounded-full border border-gray-400 text-black p-2 px-4 focus:outline-none focus:ring focus:border-pink-500 transition-all" type="text" onChange={handleOnChange} value={search}  placeholder="Enter food items (e.g., rice, fish, curd etc.)"/>

          <button type="submit" className={`mx-[42%] bg-pink-500 hover:bg-pink-600 w-[200px] text-xl py-1 mt-5 text-white rounded ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isSubmitting}>
          
          {isSubmitting ? 'Loading...' : 'Generate Calories' }
          </button>
        </form>
        {calorieData && (
          <div className="mt-3">
            <h2 className="text-lg font-bold text-white text-center whitespace-pre-wrap">{calorieData}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
