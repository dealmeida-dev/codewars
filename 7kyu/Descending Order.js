/* The challenge:

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Solution:
*/

function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''))
}

// This function first converts the input integer to a string, then splits it into an array of individual characters. It then sorts the array in ascending order, reverses it to get the descending order, and finally joins the elements of the array back into a string. The final string is then converted back to an integer using the parseInt() function.



