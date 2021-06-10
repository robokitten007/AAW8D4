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

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

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
  reader.question(`Is ${el1} greater than ${el2}?`, answer => {
    if (answer === 'yes'){
      callback(true);
    }else {
      callback(false);
    }
  });
}
// askIfGreaterThan(1,2,function(answer){
//   console.log(answer);
// });
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  // Do an "async loop":`
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
    if (i === arr.length -1){
      outerBubbleSortLoop(madeAnySwaps);
    }else {

      askIfGreaterThan(arr[i],arr[i+1], function(input){
        if(input === true)
        {[arr[i], arr[i+1]]=[arr[i+1], arr[i]]
        madeAnySwaps = true;
        };
       innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      
      } )
    ; 
    }
    
}
// function outerBubbleSortLoop(madeAnySwaps){
//   console.log(madeAnySwaps)
//} 
  // innerBubbleSortLoop([3,1,2], 0, true, outerBubbleSortLoop)
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {

    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if(madeAnySwaps === true){
      madeAnySwaps = false; 
      innerBubbleSortLoop(arr, 0, madeAnySwaps,outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);

    }
  }
  outerBubbleSortLoop(true);

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context);
  }
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  return () => {

    // console.log('177');
    // if (!tooSoon) {
    //   return this;
    // }
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => tooSoon = false, interval);
    }
    
  }
  
}

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// This time, if our Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though we're still trying to invoke it
// every 10ms!

// // If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// }