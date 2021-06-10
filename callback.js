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

const clock = new Clock();