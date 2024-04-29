console.log("Odd numbers between 1 and 10:");

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    // Skip even numbers
    continue;
  }

  console.log(i);
}
