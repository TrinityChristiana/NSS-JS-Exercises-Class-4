/* Trinity Terry
Date Created:1/14/2018
Date Edited: 1/14/2018 */
// Create an array of words in a sentence that describes you.
// Create an repeatMyself function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.
// Use this starter code to complete your exercise.

// Create an array that contains the words in the sentence
var sentenceBio = [`if`, `fish`, `die`, `in`, `water`, `does`, `that`, `mean`, `they`, `drown;`, `also`, `one`, `day`, `there`, `was`, `a`, `pig`, `that`, `married`, `an`,`elephant.`];

// The repeatMyself function should accept the array as the sole argument
function repeatMyself (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
    sentence = ``
    for(i = 0; i < theWordArray.length; i++){
      sentence = `${sentence}  ${theWordArray[i]}`
      console.log(sentence)
    }
}

// Invoke the function and pass in the array
repeatMyself(sentenceBio);













/* Results

I 
I spent 
I spent my 
I spent my caterpillar 
I spent my caterpillar days 
I spent my caterpillar days in
I spent my caterpillar days in marketing,
I spent my caterpillar days in marketing, my
I spent my caterpillar days in marketing, my cocoon
I spent my caterpillar days in marketing, my cocoon days
I spent my caterpillar days in marketing, my cocoon days at
I spent my caterpillar days in marketing, my cocoon days at Nashville
I spent my caterpillar days in marketing, my cocoon days at Nashville Software
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, 
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and my
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and my butterfly
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and my butterfly days
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and my butterfly days as 
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and my butterfly days as a 
I spent my caterpillar days in marketing, my cocoon days at Nashville Software School, and my butterfly days as a developer.*/