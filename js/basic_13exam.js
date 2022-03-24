// Print 1 to 255
Array.from({ length: 255 }, (_, x) => console.log(x + 1));

// Print odds 1 to 255
function printoddsnumtonum(startNum, endNum) {
  for (var i = startNum; i <= endNum; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
printoddsnumtonum(1, 255);

// Print ints and sum 0-255
function printIntsAndSum() {
  var runningTotal = 0;
  for (var i = 0; i <= 255; i++) {
    runningTotal += i;
    console.log(i, runningTotal);
  }
}
var sum = printIntsAndSum();

// iterate and print Array
function printArrayVals(arr) {
  for (var i = 0; arr.length; i++) {
    console.log(arr[i]);
  }
}
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printArrayVals(x);
// var temp = x[x.length - 1];
// x[x.length - 1] = [0];
// x[0] = temp;
// console.log(x);

// Find and Print Max
function printmaxofarray(arr) {
  var big = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }
  console.log(big);
}
printmaxofarray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Get and Print Average
function printaverageofarray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
  console.log(avg);
}
printaverageofarray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Array with odds
function printoddsarray(startNum, endNum) {
  var arr = [];
  for (var i = startNum; i <= endNum; i++) {
    if (i % 2 == 1) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(printoddsarray(1, 255));

// Square the values
function squareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
console.log(squareArrayVals([4, 5, 6, 7]));

var arr = [4, 5, 6, 7, 8, 9, 10];
var y = 5;
function greater(arr, y) {
  var tally = 0;
  for (var x = 0; x <= arr.length - 1; x++){
    if (arr[x] > y) {
      tally++
    }
  }
  console.log(tally);
}
greater(arr , y);


// Max, Min, Average
function printMaxMinAverageArrayVals(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  console.log("Max: " + max + ", Min: " + min + ", Avg: " + sum / arr.length);
}
printMaxMinAverageArrayVals([6, 3, 22, 67, 8]);

// Swap String for Negative Values
function swapStringForArrayNegativeVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}
console.log(swapStringForArrayNegativeVals([-1, -2, -3, 4, 5, 6, 7, 8, 9]));
