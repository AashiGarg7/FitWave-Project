import '../App.css';

const weeklyPlan = [
  {
    day: 'Monday',
    title: 'Full-Body Strength & HIIT',
    exercises: [
      'Bodyweight Squats: 4 sets of 15-20 reps',
      'Push-Ups: 4 sets of 12-15 reps',
      'Burpees: 3 sets of 15-20 reps',
      'Mountain Climbers: 4 sets of 30 seconds',
      'Plank: 4 sets of 45 seconds',
    ],
    diet: [
      'Breakfast: Oatmeal with fruits and nuts',
      'Lunch: Grilled chicken with quinoa and steamed veggies',
      'Snack: Greek yogurt with honey and almonds',
      'Dinner: Baked salmon with sweet potato and a side salad',
    ],
  },
  {
    day: 'Tuesday',
    title: 'Cardio & Core',
    exercises: [
      '30-40 minutes of HIIT Cardio (e.g., sprints, cycling, or jump rope)',
      'Russian Twists: 4 sets of 20 reps',
      'Leg Raises: 4 sets of 15 reps',
      'Bicycle Crunches: 4 sets of 20 reps per side',
    ],
    diet: [
      'Breakfast: Smoothie with spinach, banana, protein powder, and almond milk',
      'Lunch: Turkey wrap with whole grain tortilla, avocado, and veggies',
      'Snack: Apple with almond butter',
      'Dinner: Stir-fried tofu with brown rice and broccoli',
    ],
  },
  {
    day: 'Wednesday',
    title: 'Lower Body Strength',
    exercises: [
      'Lunges: 4 sets of 15 reps per leg',
      'Deadlifts: 4 sets of 12-15 reps',
      'Jump Squats: 4 sets of 15-20 reps',
      'Calf Raises: 4 sets of 20 reps',
    ],
    diet: [
      'Breakfast: Scrambled eggs with spinach and whole-grain toast',
      'Lunch: Grilled chicken Caesar salad',
      'Snack: Protein bar and a banana',
      'Dinner: Beef stir-fry with vegetables and brown rice',
    ],
  },
  {
    day: 'Thursday',
    title: 'Upper Body Strength',
    exercises: [
      'Pull-Ups/Assisted Pull-Ups: 4 sets of 8-10 reps',
      'Dumbbell Bench Press: 4 sets of 12 reps',
      'Dumbbell Rows: 4 sets of 12 reps',
      'Shoulder Press: 4 sets of 12 reps',
      'Push-Ups: 4 sets of 15-20 reps',
    ],
    diet: [
      'Breakfast: Greek yogurt with berries and granola',
      'Lunch: Tuna salad with mixed greens',
      'Snack: Mixed nuts and an orange',
      'Dinner: Baked chicken with roasted vegetables and quinoa',
    ],
  },
  {
    day: 'Friday',
    title: 'HIIT & Core',
    exercises: [
      '20-30 minutes of HIIT (e.g., sprint intervals, battle ropes, or kettlebell swings)',
      'Plank to Push-Up: 4 sets of 12 reps',
      'Side Planks: 3 sets of 30-45 seconds per side',
      'Hanging Leg Raises: 4 sets of 12 reps',
    ],
    diet: [
      'Breakfast: Smoothie with kale, avocado, protein powder, and almond milk',
      'Lunch: Grilled salmon with quinoa and steamed broccoli',
      'Snack: Cottage cheese with pineapple',
      'Dinner: Turkey meatballs with whole grain pasta and marinara sauce',
    ],
  },
  {
    day: 'Saturday',
    title: 'Active Recovery & Stretching',
    exercises: [
      '30 minutes of yoga or dynamic stretching',
      '30-45 minutes of light activity (e.g., walking, swimming, or cycling)',
    ],
    diet: [
      'Breakfast: Whole-grain pancakes with fresh berries',
      'Lunch: Chicken wrap with avocado and veggies',
      'Snack: Carrot sticks with hummus',
      'Dinner: Grilled shrimp with quinoa and mixed vegetables',
    ],
  },
  {
    day: 'Sunday',
    title: 'Rest and Recovery',
    exercises: [
      'Focus on rest, hydration, and nutrition',
    ],
    diet: [
      'Breakfast: Overnight oats with chia seeds and blueberries',
      'Lunch: Grilled chicken salad with mixed greens',
      'Snack: Smoothie with banana, spinach, and almond butter',
      'Dinner: Baked cod with sweet potato and steamed asparagus',
    ],
  },
];

const FatToFitChallenge = () => {
  return (
    <div className="min-h-[100%] custom-scrollbar bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">7-Day Fat to Fit Challenge</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeklyPlan.map((routine, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg shadow-lg hover:text-black transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-lime-400"
            >
              <h2 className="text-3xl font-semibold mb-4">{routine.day}</h2>
              <h3 className="text-2xl font-semibold mb-4">{routine.title}</h3>
              <div>
                <h4 className="text-xl font-semibold mb-2">Exercises</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {routine.exercises.map((exercise, i) => (
                    <li key={i} className="transition-colors transform duration-300 hover:text-black">
                      {exercise}
                    </li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold mb-2">Diet Plan</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {routine.diet.map((meal, j) => (
                    <li key={j} className="transition-colors duration-300 hover:text-black">
                      {meal}
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

export default FatToFitChallenge;
