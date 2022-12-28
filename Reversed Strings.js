// The challenge: Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// My solution involves using the split function then reverse it's order and joing it again. See below:

function solution(str){
  return str.split("").reverse().join("");
}