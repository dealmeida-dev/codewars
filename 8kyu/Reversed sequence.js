//The challenge

// Build a function that returns an array of integers from n to 1 where n>0.


const reverseSeq = n => {
  let array = [];
  for (let i = n; i > 0; i--){
  array.push(i)
    }return array
};
