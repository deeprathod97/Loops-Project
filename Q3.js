function printMultiplicationTable(number) {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      let result = number * i;
      if (result % 2 === 0) {
        continue; 
        // Skip even multiples
      }
      console.log(`${number} * ${i} = ${result}`);
    }
  }
  
  // Example usage
  printMultiplicationTable(5);
  