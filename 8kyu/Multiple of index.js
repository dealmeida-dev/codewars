// The challenge: Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Solution:

function multipleOfIndex(array) {
  return array.filter((x, y) => x % y === 0)
}