class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let currentTime = new Date();
        this.hour = currentTime.getHours();
        this.minute = currentTime.getMinutes();
        this.second = currentTime.getSeconds();
        
        setInterval(this._tick.bind(this), 1000);
        
        
}

   printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.

    console.log(`${this.hour}::${this.minute}::${this.second}`);

  }

   _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (this.second!== 59){
    this.second = 1 + this.second;}
    else {
        this.minute = this.minute + 1;
        this.second = 0;
    }
    // console.log(this)
    this.printTime(); 
  }
}

// const clock = new Clock();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    rl.close();
    return completionCallback(sum);
   
  }
  // prompt the user for a number
  // pass a callback into the reader, and in the callback
  // 
  rl.question('Please input a number: ', number => {
    let numToAdd = parseInt(number);
    sum = sum + numToAdd;
    console.log(`${sum}`);
    addNumbers(sum, numsLeft - 1, completionCallback);
  })
  
 
  
}

// addNumbers(0,5, sum => console.log(`Total Sum: ${sum}`));
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  rl.question(`Is ${el1} greater than ${el2}?`, answer => {
    
  })
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});