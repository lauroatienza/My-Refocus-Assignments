//TASKS
//Keep a record of their activities.
//Monitor the number of calories they lose when performing the activity.

//SCENARIO
//Sam decides to do cycling 30 minutes everyday for 15 days. Cycling for 30 minutes burns 225 calories on average. Use console.log to tell Sam how much calories he would lose

//VARIABLES
let caloriesPerHour = 450;
let numTimesSamRans = 15;
let runHoursPerDay = 0.5;

//COMPUTE
let totalHoursRunning = numTimesSamRans * runHoursPerDay;
let totalCaloriesSamBurned = totalHoursRunning * caloriesPerHour;

console.log(`Great work, Sam! After ${runHoursPerDay} hours of running every day for a week, you may lose a total of ${totalCaloriesSamBurned} calories.`);