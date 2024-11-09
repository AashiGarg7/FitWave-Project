// import React from 'react'
import { useState } from 'react';
import '../App.css'

const exercises = [
  {
    name: 'Push-ups',
    description: 'Build upper body strength with this fundamental exercise.',
    detail: 'Your spine should form a straight line, with a neutral spine. Bend your elbows to descend to the floor, stopping with your chest just above the ground. Your elbows should be at a 45 degree angle relative to the torso. Press back up off the floor, raising up to the top position with your elbows fully extended.',
    image: 'https://blog.nasm.org/hubfs/Guide%20to%20Push%20ups%20Main%20Image.jpg',
  },
  {
    name: 'Squats',
    description: 'Strengthen your lower body with squats.',
    detail: 'Stand with your feet shoulder-width apart, toes slightly out, core braced, and chest up. Initiate a basic squat movement — hips back, knees bent, ensuring they fall out, not in. Pause when your thighs reach about parallel to the ground. Push through your entire foot to return to start.',
    image: 'https://t3.ftcdn.net/jpg/03/13/85/36/360_F_313853659_KALc7QWhXDCfetjRpOFEn1ehTu3R46cF.jpg', 
  },
  {
    name: 'Planks',
    description: 'Improve core stability with planks.',
    detail: 'Align the wrists under the shoulders so that the arms are in a straight line from the shoulders down. Step the feet back toward the end of the mat. With the arms and feet strong, the body should be in a straight line from the crown of the head through the heels. Plank pose is also known as kumbhakasana in Sanskrit.',
    image: 'https://www.healthdigest.com/img/gallery/this-trick-will-make-doing-pushups-much-easier/intro-1607442386.jpg', 
  },
  {
    name: 'Jumping Jacks',
    description: 'A full-body exercise to get your heart pumping.',
    detail: 'Stand in a straight position with your feet together, arms fully extended, hands by your sides, and toes pointed forward.Next, slightly bend your knee in a rapid movement, jump your feet out to your bodys sides, swing your arms out to either side and raise them above your head.',
    image: 'https://www.hola.com/horizon/landscape/82b3dc34d128-jumping-jack-t.jpg', 
  },
  {
    name: 'Lunges',
    description: 'Target your glutes and legs with lunges.',
    detail: 'Stand with your feet together, hips tucked, and core engaged. Take a big step out to the right with your right foot. When your foot hits the ground, hinge forward at the hips, push your butt back, and bend your right knee to lower into a lunge. Your left leg should remain straight.',
    image: 'https://media.istockphoto.com/id/1036780614/photo/lunging-is-good-for-the-legs.jpg?s=612x612&w=0&k=20&c=VuajT0dCbTIXGCkX6EMBBvq9yExTOLWwu0fN-9txWs8=', 
  },
  {
    name: 'Crunches',
    description: 'Improve your posture by working on your core and strengthening it.',
    detail:'Lie down on your back. Plant your feet on the floor, hip-width apart. Bend your knees and place your arms across your chest. Contract your abs and inhale.Exhale and lift your upper body, keeping your head and neck relaxed.Inhale and return to the starting position.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMn30lJNR73wRR4lIwn5T_y5bziSvN8pXKg&s', 
  },
 
];


const FitnessForBeginners = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const toggleDetail = (index) => {
    setSelectedExercise(selectedExercise === index ? null : index);
  };
  
  return (
    <div className="min-h-[100%]  bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-black-800 p-6 rounded-lg border-x-2 border-y-2 border-lime-300 shadow-lg hover:bg-black-700 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{exercise.name}</h2>
            <p className="text-gray-300 mb-4">{exercise.description}</p>
            <button
              onClick={() => toggleDetail(index)}
              className="py-2 px-4 bg-lime-400 text-black rounded-lg hover:bg-slate-950 hover:text-white transition duration-300 ease-in-out"
            >
              {selectedExercise === index ? 'Show Less' : 'Learn More'}
            </button>
            {selectedExercise === index && (
              <div className="mt-4 text-gray-300">
                <p>{exercise.detail}</p>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessForBeginners;







// const FitnessForBeginners = () => {
//     return (
//       <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {exercises.map((exercise, index) => (
//             <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
//               <img
//                 src={exercise.image}
//                 alt={exercise.name}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h2 className="text-2xl font-semibold mb-2">{exercise.name}</h2>
//               <p className="text-gray-300">{exercise.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default FitnessForBeginners;


















