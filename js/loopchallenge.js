function printoddsnumtonum(startNum, endNum) {
    for (var i = startNum; i <= endNum; i++) {
      if (i % 2 == 1) {
        console.log(i);
      }
    }
  }
  printoddsnumtonum(1, 20);

function printmultnumtonum(startNum, endNum){
    for (var i= startNum; i >= endNum; i--){
        if ( i % 3 ===0){
            console.log(i);
        }
    }
}
printmultnumtonum(100, 0);

