/* The challenge:

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Solution:
*/

function openOrSenior(data){
  let results = [] // Create an array to push results
  
  data.forEach(function(member){
    if(member[0] >= 55 && member[1] > 7) {
      results.push("Senior")
    }else {
      results.push("Open")
    }
  })
  return results
}