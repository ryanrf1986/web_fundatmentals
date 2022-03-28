// 1.
function printoddsnumtonum(startNum, endNum) {
    for (var i = startNum; i <= endNum; i++) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
  }
printoddsnumtonum(1, 20);


// 2.
function printmultnumtonum(startNum, endNum){
    for (var i= startNum; i >= endNum; i--){
        if ( i % 3 ===0){
            console.log(i);
        }
    }
}
printmultnumtonum(100, 0);


// 3.
function printsequence (startNum, endNum){
  for (var i = startNum; i >= endNum; i -= 1.5)
    console.log(i);
}
printsequence(4, -3.5)


// 4.
let sum = 0;
  for( var i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);


// 5.
let product = 1;
  for( var i = 1; i<=12; i++){
    product *= i;
  }
console.log(product);
  

