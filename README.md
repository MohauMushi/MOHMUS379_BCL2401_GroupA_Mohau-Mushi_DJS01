### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

![alt text](mars.gif)

##### Initial Parameters

- **Initial Velocity (`vel`)**: The starting speed of the spacecraft, 10,000 km/h.
- **Acceleration (`acc`)**: The spacecraft's acceleration, 3 m/s².
- **Time (`time`)**: The duration of the calculation, 3,600 seconds (equivalent to 1 hour).
- **Initial Distance (`d`)**: The starting distance from the reference point, 0 km.
- **Initial Fuel (`fuel`)**: The starting amount of fuel, 5,000 kg.
- **Fuel Burn Rate (`fbr`)**: The rate at which fuel is consumed, 0.5 kg/s.

##### Expected Corrected Results

- **New Velocity**: Approximately 48880 km/h after correction.
- **New Distance**: Approximately 10000 km after correction.
- **Remaining Fuel**: Approximately 3,200 kg after correction.

### Challenges

The challenges which i faced was doing the conversion for the velocity to be in meters per seconds, and be able to use the velocityMs it trought out the whole code.
Another challenge was coverting back to km/s from m/s for the new velocity to be able to meet the corrected new velocity in km/s.
The Second Challege is that i didn't Make the calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc), but on wednesday i figured out that i missed the important part or instruction which was very the main important thing in this project, I had to look at the LMS again to learn how to use `props` and after learning the i started to do the right thing with the porjects.

Writing a JavaScript function calcNewVel that calculates the new velocity of an object given its initial velocity, acceleration, time elapsed, and other relevant parameters and the function should handle various units of measurement and perform necessary conversions. It should also validate the input data and throw appropriate errors if any input is invalid, was a challenge in the creation of this project

## 📚 what I Learned

1. **Identify and Understand Errors**: Analyse the provided functions to determine how unit mismatches and parameter misalignments cause incorrect results.
2. **Refactor and Correct**: Modify the functions to handle parameters more effectively, incorporating object destructuring for clarity and implementing necessary unit conversions.
3. Implementing accurate unit conversions within the functions.

4. **Object Destructuring**: how code uses object destructuring to extract properties from the `props` object. This technique allowed me to unpack properties from objects into distinct variables, making the code more concise and readable.

5. **Input Validation**: performing extensive input validation to ensure that the provided values are valid and within expected ranges. It checks for positive numbers, non-negative numbers, and specific units of measurement for each property.

6. **Error Handling**: The use od `throw` statements to create and throw custom error objects when input validation fails. This approach allowed for better error handling and provides more meaningful error messages.

7. **Unit Conversions**: The code demonstrates how to perform unit conversions between different measurement systems. In this case, it converts between kilometers per hour (km/h) and meters per second (m/s) using a conversion factor.

8. **Calculating Derived Values**: how to calculate derived values based on the provided input data. Calculating the new velocity based on the initial velocity, acceleration, and time elapsed. Also calculating the new distance traveled and the remaining fuel based on the provided parameters.

9. **Object Manipulation**: Creating new objects by spreading the properties of the input object and adding or modifying specific properties. This technique was useful for creating new objects based on existing ones while making changes to certain properties.

10. **Function Design and Modularity**: Design of a reusable function (`calcNewVel`) that encapsulates the logic for calculating the new velocity and other related values. This approach promotes code reusability and maintainability.

11. **Parameter Handling**: How to handle function parameters effectively. To check if the required parameters are provided and validates their values before proceeding with the calculations.
