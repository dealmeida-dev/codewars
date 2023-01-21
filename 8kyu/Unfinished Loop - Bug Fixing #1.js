/* The challenge:

Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}

Solution:
*/

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){ //counter to increase by one so the loop will stop when reaching n
    newArray.push(counter);
  }
  
  return newArray;
}