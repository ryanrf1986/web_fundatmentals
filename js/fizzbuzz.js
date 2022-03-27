for (var x = 1; x <= 100; x++) {
    if (x % 3 === x % 5 === 0) {
      console.log("FizzBuzz");
    }
    if (x % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    if (x % 5 === 0) {
      console.log("Buzz");
      continue;
    }
    console.log(x);
  }