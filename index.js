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

// A function named calcNewVel that takes an object props as its argument.
function calcNewVel(props) {
   // Check if props is provided, throw an error if not
  if (!props) throw new Error("props is required");
  
  // Destructuring the required properties from props
  const {velocity, acceleration, timeSeconds, distance, fuel, fuelBurnRate,} = props;

  // this code is validating the measurement properties of various objects against expected units
try {
  if (velocity.measurement !== "km/h") {
    throw new Error("Invalid measurement unit for velocity. Expected: km/h");
  } else if (acceleration.measurement !== "m/s^2") {
    throw new Error("Invalid measurement unit for acceleration. Expected: m/s^2");
  } else if (timeSeconds.measurement !== "s") {
    throw new Error("Invalid measurement unit for time. Expected: s");
  } else if (distance.measurement !== "km") {
    throw new Error("Invalid measurement unit for distance. Expected: km");
  } else if (fuel.measurement !== "kg") {
    throw new Error("Invalid measurement unit for fuel. Expected: kg");
  } else if (fuelBurnRate.measurement !== "kg/s") {
    throw new Error("Invalid measurement unit for fuel burn rate. Expected: kg/s");
  }
} catch (error) {
  console.error("An error occurred:", error.message);
}
  // Calculate the new velocity
  const newVelocity = velocity.value + (acceleration.value * timeSeconds.value) * conversionRate;
  
  // this code creates a new object that contains all the properties from the props object, and returns the new Velocity
  return {...props, velocityKm: newVelocity};

  }

// declaring a variable newVelocity and assigning it the value returned by a function calcNewVel
let newVelocity = calcNewVel(object);

// Consoling the output for the corrected new velocity, distance and remaining fuel
console.log(`Corrected New Velocity: ${object.velocityKm} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);