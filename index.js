const object = calcNewVel({
  // velocity is an object with 'value' and 'measurement' properties
  velocity: {
    value: 10000, // Initial velocity value (10000 km/h)
    measurement: "km/h", // Unit of measurement for velocity
  },
  // acceleration is an object with 'value' and 'measurement' properties
  acceleration: {
    value: 3, // Acceleration value (3 m/s^2)
    measurement: "m/s^2", // Unit of measurement for acceleration
  },
  // timeSeconds is an object with 'value' and 'measurement' properties
  timeSeconds: {
    value: 3600, // Time value (3600 seconds or 1 hour)
    measurement: "s", // Unit of measurement for time
  },
  // distance is an object with 'value' and 'measurement' properties
  distance: {
    value: 0, // Initial distance value (0 km)
    measurement: "km", // Unit of measurement for distance
  },
  // fuel is an object with 'value' and 'measurement' properties
  fuel: {
    value: 5000, // Initial fuel value (5000 kg)
    measurement: "kg", // Unit of measurement for fuel
  },
  // fuelBurnRate is an object with 'value' and 'measurement' properties
  fuelBurnRate: {
    value: 0.5, // Fuel burn rate value (0.5 kg/s)
    measurement: "kg/s", // Unit of measurement for fuel burn rate
  },
});
// Units conversion
const conversionRate = 3.6; // 1 m/s = 3.6 km/h

//calculting new distance
const newDistance = object.distance.value + (object.velocity.value * object.timeSeconds.value / 3600);

//calculating remaining fuel
const remainingFuel = object.fuel.value - (object.fuelBurnRate.value * object.timeSeconds.value);

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