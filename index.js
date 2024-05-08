//A constant object named object 
const object = {
 velocityKmH : 10000, // velocity (km/h)
 accelerationMs2 : 3, // acceleration (m/s^2)
 timeSeconds : 3600, // seconds (1 hour)
 distanceKm : 0, // distance (km)
 fuelKg : 5000, // remaining fuel (kg)
 fuelBurnRateKgS : 0.5 // fuel burn rate (kg/s)
}
// Units conversion
const conversionRate = 3.6; // 1 m/s = 3.6 km/h

//calculting new distance
let newDistanceKm = object.distanceKm + (object.velocityKmH * object.timeSeconds/3600) 

//calculating remaining fuel
let remainingFuel = object.fuelKg - (object.fuelBurnRateKgS * object.timeSeconds) 

// an arrow function named calcNewVel that takes an object props as its argument.
const calcNewVel = (props) => {
   // Check if props is provided, throw an error if not
  if(!props) throw new Error(`"props" is requred`);
  
  // Destructure the required properties from props
  const {accelerationMs2, velocityKmH, timeSeconds} = props;

  // Calculate the new velocity
  return velocityKmH + ((accelerationMs2 * timeSeconds) * conversionRate);
}

// declaring a variable newVelocity and assigning it the value returned by a function calcNewVel
let newVelocity = calcNewVel(object);

// Consoling the output for the corrected new velocity, distance and remaining fuel
console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);