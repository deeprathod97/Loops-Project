function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        continue; 
      }
      factorial *= i;
    }
    return factorial;
  }
  
  
  let number = 5;
  let result = calculateFactorial(number);
  console.log(`Factorial of ${number} is ${result}`);
  