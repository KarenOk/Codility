// Check Day
// Give the present day of the week and a number of days elapsed, find the new day. 0 = Sunday, 6 = Saturday
var num = 20;
var days = {
  "0": "Sunday",
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday"
}

function checkDay (today, num){
    console.log(days[String((today + num) % 7)]);
}
checkDay(2,-1);




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, num) {
    // write your code in JavaScript (Node.js 8.9.4)
    var SKey;
    var days = {
        "0": "Mon",
        "1": "Tue",
        "2": "Wed",
        "3": "Thur",
        "4": "Fri",
        "5": "Sat",
        "6": "Sun",
    };
    
    for (index of Object.keys(days)){
      if (days[index] === S){
        SKey = Number(index);
        break;
      }
    }
    
    let newDay = days[String((SKey + num) % 7)];
    return newDay;
}

