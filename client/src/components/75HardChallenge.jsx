import '../App.css'
const weeklyPlan = [
  {
    day: 'Day 1',
    title: 'Upper Body Strength',
    exercises: [
      'Bench Press or Push-Ups: 4 sets of 8-12 reps',
      'Dumbbell Rows or Bent Over Rows: 4 sets of 8-12 reps',
      'Shoulder Press: 3 sets of 10-15 reps',
      'Bicep Curls: 3 sets of 12-15 reps',
      'Tricep Dips or Overhead Tricep Extensions: 3 sets of 12-15 reps',
    ],
  },
  {
    day: 'Day 2',
    title: 'Lower Body Strength',
    exercises: [
      'Squats: 4 sets of 8-12 reps',
      'Deadlifts: 4 sets of 8-12 reps',
      'Lunges: 3 sets of 12-15 reps per leg',
      'Leg Press or Bulgarian Split Squats: 3 sets of 10-15 reps',
      'Calf Raises: 3 sets of 15-20 reps',
    ],
  },
  {
    day: 'Day 3',
    title: 'Cardio & Core',
    exercises: [
      '30-45 minutes of moderate to intense cardio',
      'Core Circuit (3 rounds):',
      'Plank: 1 minute',
      'Russian Twists: 20 reps per side',
      'Leg Raises: 15 reps',
      'Mountain Climbers: 30 seconds',
    ],
  },
  {
    day: 'Day 4',
    title: 'Full Body Functional Training',
    exercises: [
      'Burpees: 3 sets of 10-15 reps',
      'Kettlebell Swings: 4 sets of 15 reps',
      'Battle Ropes: 3 sets of 30 seconds',
      'Medicine Ball Slams: 3 sets of 15 reps',
      'Box Jumps: 3 sets of 10-12 reps',
    ],
  },
  {
    day: 'Day 5',
    title: 'Active Recovery & Flexibility',
    exercises: [
      'Light activity: 30 minutes (walking, gentle yoga)',
      'Stretching routine or yoga session: 30 minutes',
    ],
  },
  {
    day: 'Day 6',
    title: 'Cardio Intervals',
    exercises: [
      'Interval Training (e.g., 1 minute high intensity, 2 minutes low intensity) for 20-30 minutes',
      'Cool-down with light cardio and stretching',
    ],
  },
  {
    day: 'Day 7',
    title: 'Rest Day',
    exercises: [
      'Full rest or gentle stretching',
    ],
  },
];

const Hard75Days = () => {
    return (
      <div className="min-h-[100%] custom-scrollbar bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-8">
        <div className="container ">
          {/* <h1 className="text-4xl font-bold mb-8 text-center">75-Day Hard Fitness Challenge</h1> */}
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Weekly Fitness Plan</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyPlan.map((week, index) => (
              <div
                key={index}
                className="bg-black-400 p-6 border-x-2 border-y-2 border-lime-400 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-lime-400"
              >
                <div className="text-white hover:text-black">
                  <h2 className="text-2xl font-semibold mb-4">{week.day}: {week.title}</h2>
                  <ul className="list-disc pl-5">
                    {week.exercises.map((exercise, i) => (
                      <li
                        key={i}
                        className="mb-2"
                      >
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Hard75Days;








