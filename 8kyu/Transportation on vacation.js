// The challenge: 

/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).*/

// My Solution

let carPrice = 40;

function rentalCarCost(d) {
  if(d >= 7){
    return carPrice * d - 50;
  }else if(d >= 3){
     return carPrice * d - 20;
  }else{
    return carPrice * d;
  }
}


// car price per day is 40
// if more or equal to 7 days less 50 from total
// if 3 or more days less 20 from total