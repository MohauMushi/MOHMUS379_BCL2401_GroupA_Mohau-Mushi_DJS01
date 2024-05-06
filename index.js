// Given Parameters
let velocityKmH = 10000; // velocity (km/h)
let accelerationMs2 = 3; // acceleration (m/s^2)
let timeSeconds = 3600; // seconds (1 hour)
let distanceKm = 0; // distance (km)
let fuelKg = 5000; // remaining fuel (kg)
let fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Units conversion
let velocityMs = velocityKmH * 1000 / 3600 // Converting Km/h -> m/s

//calculting new distance
let newDistanceM = distanceKm + (velocityMs * timeSeconds) 
let newDistanceKm = newDistanceM / 1000;  // converting m -> km for the new distance

//calculating remaining fuel
let remainingFuel = fuelKg - (fuelBurnRateKgS * timeSeconds) 

// Calculating the new velocity by adding the product of acceleration and time to the initial velocity.
function calcNewVel(accelerationMs2, velocityMs, timeSeconds){ 
  return velocityMs + (accelerationMs2 * timeSeconds)
}

//calculating new velocity based on acceleration
let newVelocity = calcNewVel(accelerationMs2, velocityMs, timeSeconds) 
let newVelocityKmH = newVelocity * (3600 / 1000); // converting m/s to km/h

// Consoling the output for the corrected new velocity, distance and remaining fuel
console.log(`Corrected New Velocity: ${newVelocityKmH} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






