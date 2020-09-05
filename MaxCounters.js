// Score 66

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  var counter = [];

  for (let i = 0; i < N; i++) {
    counter[i] = 0;
  }

  A.forEach(value => {
    if (value === counter.length + 1) {
      let maxValue = Math.max(...counter);
      counter.forEach((cvalue, cindex) => {
        counter[cindex] = maxValue;
      });
    } else {
      counter[value - 1] = counter[value - 1] + 1; 
    
  }
    ;
  
return (counter);
  


  // Score 77



  function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //initialize counter
    var counter = (new Array(N)).fill(0);
    var max = 0;

    // loop through Array
    A.forEach((elem, index) => {
      // check the index, if less than N + 1, then locate counter[i-1] ond increment
      if (elem < N + 1) {
        counter[elem - 1]++;
        // console.log(counter);

        // be sure to check if max and replace
        max = (counter[elem - 1] > max) ? counter[elem - 1] : max;
        // console.log(max);
      } else {
        // else if elem = N + 1, counter.fill(max)       
        counter.fill(max);
      }
    });

    return counter;
  }