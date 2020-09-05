// Look for a greater number
function findGreatest (num, placeNum) {
  let str;
  let strArr;
  let numStore = [];
  let pushed = false; // Has number to push in been pushed?

  // Check if negative
  if (num < 0) {
      str = String(Math.abs(num));
      strArr = Array.from(str);

      for (elem of strArr) {
        // For negative number, the greatest number is where placeNum causes the smallest number
        if (placeNum < elem && !pushed) {
          numStore.push(placeNum);
          numStore.push(elem);
          pushed = true;
        } else {
          numStore.push(elem);
        }
      }
  } else { // If positive
    str = String(num);
    strArr = Array.from(str);
    
    for (elem of strArr) {
      // For postive number, the greatest num is where placeNum causes the biggest number
      if (placeNum > elem && !pushed){
        numStore.push(placeNum);
        numStore.push(elem);
        pushed = true;
      } else {
        numStore.push(elem);
      }
    }
  }

  // If after the looping nothing happens, then place placeNum at the end
  if (!pushed) {
     numStore.push(placeNum);
  }

    console.log( (num > 0) ? numStore.join("") : "-" + numStore.join(""));
}

findGreatest(-91, 8);



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let str, strArr;
    let placedDigit = 5; // Digit to be placed is 5 for this question
    let pushed = false;
    

    
    // Check for negative values
    if (N  < 0) {
        str = String(Math.abs(N));
        strArr = Array.from(str);
        
        for (let index in strArr){
            if (placedDigit < strArr[index] && !pushed){
                strArr.splice(index, 0, placedDigit);
                pushed = true;
                break;
            }
        }
        
    } else { // For positive values
        str = String(N);
        strArr = Array.from(str);
        
        for (let index in strArr){
            if (placedDigit > strArr[index] && !pushed){
                strArr.splice(index, 0, placedDigit);
                pushed = true;
                break;
            }
        }
    }
    
    // If the placed digit was never pushed, append to the end.
    if(!pushed){
        strArr.push(placedDigit);
    }
    
    return (N >= 0) ? Number(strArr.join("")) : Number("-" + strArr.join(""))
}








/*Implementation using splice */
















// Look for a greater number
function findGreatest (num, placeNum) {
  let str;
  let strArr = [];
  let pushed = false; // Has number to push in been pushed?

  // Check if negative
  if (num < 0) {
      str = String(Math.abs(num));
      strArr = Array.from(str);

      for (index in strArr) {
        // For negative number, the greatest number is where placeNum causes the smallest number
        if (placeNum < strArr[index] && !pushed) {
          strArr.splice(index, 0, placeNum);
          pushed = true;
          console.log(strArr);
          break;
        }
      }
  } else { // If positive
    str = String(num);
    strArr = Array.from(str);
    
    for (index in strArr) {
      // For postive number, the greatest num is where placeNum causes the biggest number
      if (placeNum > strArr[index] && !pushed){
        strArr.splice(index, 0, placeNum )
        pushed = true;
        break;
      }
    }
  }

  // If after the looping nothing happens, then place placeNum at the end
  if (!pushed) {
     strArr.push(placeNum);
  }

    console.log( (num > 0) ? strArr.join("") : "-" + strArr.join(""));
}

findGreatest(91, 8);




