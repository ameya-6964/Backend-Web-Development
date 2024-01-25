// Initialize a variable to be used in the counter
let value = 0;

// Function to greet after a delay
function delayGreet() {
  // Set a timeout to execute the following code after 8 seconds (8000 milliseconds)
  setTimeout(() => {
    console.log("Hello From DelayGreet Method");
  }, 8000);
}

// Function to start a counter using setInterval
function startCounter() {
  // Set an interval to execute the following code every second (1000 milliseconds)
  let intervalId = setInterval(() => {
    // Check if the value is less than or equal to 5
    if (value <= 5) {
      console.log("Inside Set Interval", value);
      value++; // Increment the value
    } else {
      // If the value exceeds 5, clear the interval to stop the counter
      clearInterval(intervalId);
    }
  }, 1000);
}

// Display a message outside of any function
console.log("Hello From Outside");

// Call the functions to demonstrate asynchronous behavior
delayGreet();
startCounter();
