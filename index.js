/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
let velocityKmH = 10000; // velocity (km/h)
let accelerationMs2 = 3; // acceleration (m/s^2)
let timeSeconds = 3600; // seconds (1 hour)
let distanceKm = 0; // distance (km)
let fuelKg = 5000; // remaining fuel (kg)
let fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Units conversion
let velocityMs = velocityKmH * 1000 / 3600 // Converting Km/h -> m/s

//calcultes new distance
let newDistance = distanceKm + (velocityMs * timeSeconds) 
let newDistanceKm = newDistance / 1000;  // converting m -> km for the new distance

//calculating remaining fuel
let remainingFuel = fuelKg - (fuelBurnRateKgS * timeSeconds) 

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(accelerationMs2, velocityMs, timeSeconds){ 
  return velocityMs + (accelerationMs2 * timeSeconds)
}

let newVelocity = calcNewVel(accelerationMs2, velocityMs, timeSeconds) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






