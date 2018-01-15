/* Trinity Terry
Date Created:1/14/2018
Date Edited: 1/14/2018 */
// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.

// Celsius to Fahrenheit
// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
// Output the temperature in Fahrenheit to the console

function calculateFahrenheit(celsius){
    var fahrenheit = (celsius * 1.8) + 32
    console.log(`You entered ${celsius}º Celsius. That converts to ${fahrenheit}º Fahrenheit.`)
}
// Fahrenheit to Celsius
// Write a function that takes the temperature in Fahrenheit as the parameter
// The function should do the following calculation to get the temperature in Celsius: T(C) = (T(F) - 32) / 1.8
// Output the temperature in Celsius to the console
function calculateCelsius(fahrenheit){
    var celsius = (fahrenheit - 32) /1.8
    console.log(`You entered ${fahrenheit}º Fahrenheit. That converts to ${celsius}º Celsius.`)
}

calculateCelsius(32);
calculateFahrenheit(68);

// Result
// Console:
// "You entered [degrees in Celsius] Celsius. That converts to [degrees in Fahrenheit] Fahrenheit." "You entered [degrees in Fahrenheit] Fahrenheit. That converts to [degrees in Celsius] Celsius."