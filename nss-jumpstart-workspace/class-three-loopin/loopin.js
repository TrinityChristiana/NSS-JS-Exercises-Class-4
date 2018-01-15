/*
Trinity Terry
Create Date: 1/13/18
Edited Date: 1/13/18
*/
//Create an array of 5 of your interests.
var interest = ["singing", "guitar", "piano", "songwriting", "coding"];
//Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
for(i = 0; i < interest.length; i++) {
  if(i === 2) {
    console.log(`My absolute favorite interest is: ${interest[i]}`)
  } else {
    console.log(`One of my interests is: ${interest[i]}`);
  }
}
//Pick your favorite interest. Add an if statement in your loop that checks each time if the interest is your favorite interest. For the one item that is your favorite, console log "My absolute favorite interest is: [your favorite interest]." Still console log the message for each of your other interests from the step above.