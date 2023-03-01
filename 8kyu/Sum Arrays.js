// The challenge:

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.



//Solution

function sum (numbers) {
  if(numbers.length === 0) {
    return 0
  }
  
  let result = 0
  for(let i = 0; i < numbers.length; i++){
    result += numbers[i]
  }
      return result

};