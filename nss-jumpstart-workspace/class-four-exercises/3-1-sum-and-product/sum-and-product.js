/* Trinity Terry
Date Created:1/14/2018
Date Edited: 1/14/2018 */
// You'll be writing a function that accepts an array of numbers and adds them up.

// Create a variable with an array of numbers.
var numbers = [4, 7, 8008, 11, 9, -1]
// Create (declare) a function named addUpAllTheseNumbers.
// The function should accept one argument: an array of numbers.
// The function should have a for loop that loops over the array of numbers parameter and adds them to a running sum.
function addUpAllTheseNumbers(numbers){
    var sum = 0
    for(i = 0; i < numbers.length; i++){
        sum = sum + numbers[i]
    }
    return sum 
}

var mySum = addUpAllTheseNumbers(numbers);

console.log(mySum)
// The function should return the sum.
// Call the function and pass in the array variable from step 1.
// Save the results of the step above to a variable named mySum. 

// Result
// Console:
// If your numbers array looks like this: [4, 7, 8008, 11, 9, -1]

// Output: 8038