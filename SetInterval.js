/*
   Task - recreate the setInterval() function

   A) Create as a SetInterval prototype, that takes two constructor arguments:
       1. "func", the function to be called at the intervals
       2. "interval", the amount of time in milliseconds between each interval


   B) Create "clear" method on SetInterval that will clear the intervals from running

   Reference - https://www.w3schools.com/jsref/met_win_setinterval.asp
*/

function secondFunction (func, interval) {
  setTimeout(func, interval)
}

function SetInterval(func, interval) {
  let clear = 1;
   
  while ( stopper <= 10) {
    setTimeout(secondFunction,interval);
    stopper = stopper + 1;
  }
  
}

SetInterval.prototype.start = function() {
}

SetInterval.prototype.clear = function() {
}

var myInterval = new SetInterval(() => {console.log("BuyCoins!");}, 1000);
setTimeout(() => myInterval.clear(), 3000);















/*
   Task - recreate the setInterval() function

   A) Create as a SetInterval prototype, that takes two constructor arguments:
       1. "func", the function to be called at the intervals
       2. "interval", the amount of time in milliseconds between each interval


   B) Create "clear" method on SetInterval that will clear the intervals from running

   Reference - https://www.w3schools.com/jsref/met_win_setinterval.asp
*/



function SetInterval(func, interval) {
  this.stop = false;
   
  for ( var i = 1; !this.stop; i++) {
    setTimeout(func,interval * i);
  }
  
}

SetInterval.prototype.start = function() {
}

SetInterval.prototype.clear = function() {
  return this.stop = true;
}

var myInterval = new SetInterval(() => {console.log("BuyCoins!");}, 1000);
setTimeout(() => myInterval.clear(), 3000);



