var A = [];
  A[0] = 4
    A[1] = 1
    A[2] = 3
var counter = 1;
var perm = true;

var ASorted = A.sort((a,b) => a - b);
console.log(ASorted);

for (let i = 0; i < ASorted.length; i++){
  if (ASorted[i] !== counter){
    perm = false;
  }
  counter = counter + 1;
}
console.log(perm);
