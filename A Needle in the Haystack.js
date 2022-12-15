// The challenge:

/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output) */

// My solution using forEach

function findNeedle(haystack) {
  let foundNeedle;
  haystack.forEach((value, index) => {
    if (value === "needle") {
      foundNeedle = index;
    }
  });
  return `found the needle at position ${foundNeedle}`;
}