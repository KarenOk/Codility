 var A = [9,3,9,3,9,7,9];
var AObj = {};
var unpaired = undefined;

A.forEach((value, index) => {
  if (  AObj[`${value}`] ) {
      AObj[`${value}`] = AObj[`${value}`] + 1;
  } else {
     AObj[`${value}`] = 1;
  }
});

for (key of Object.keys(AObj)){
 if (AObj[key] % 2 !== 0) {
   unpaired = Number(key);
   break;
 }
};

console.log(unpaired);

