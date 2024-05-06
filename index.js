/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const distanceKm = 0; // distance (km)
const fuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Units conversion
let velocityMs = velocityKmH * 1000 / 3600 // Converting Km/h -> m/s

const newDistance = distanceKm + (velocityKmH * timeSeconds) //calcultes new distance

//calculating remaining fuel
const remainingFuel = fuelKg - (fuelBurnRateKgS * timeSeconds) 

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(accelerationMs2, velocityKmH, timeSeconds){ 
  return velocityKmH + (accelerationMs2 * timeSeconds)
}

const newVelocity = calcNewVel(accelerationMs2, velocityKmH, timeSeconds) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






