function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    // Create set
    var arrSet = new Set ();

    //  Loop through each elem of A
    A.forEach(elem => {
      // Add to set as you go
      arrSet.add(elem);
    })

    // return number of set elems
    return arrSet.size;
}
