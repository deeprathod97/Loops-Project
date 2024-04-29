let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i; // Accumulate the sum

  if (sum > 1000) {
    break; // Break out of the loop if sum exceeds 1000
  }
}

console.log("Sum of numbers from 1 to 100:");

// Check if the sum exceeds 1000
if (sum > 1000) {
  console.log("Sum exceeds 1000. Current Sum:", sum);
} else {
  console.log("Sum:", sum);
}
