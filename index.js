const colors = require('colors');
const { getArgument, getTimeRemaining } = require('./modules.js');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const date = process.argv[2];

var deadline = getArgument(date);

function initializeClock(endtime) {
   
    function updateClock() {
      const t = getTimeRemaining(endtime);
      
      const year = t.years;
      const month = t.months;
      const day = t.days;
      const hour = ('0' + t.hours).slice(-2);
      const minute = ('0' + t.minutes).slice(-2);
      const second = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
        emitter.emit('stop', colors.red('Time End'))
      }
      emitter.emit('start', `${year}-${month}-${day}-${hour}-${minute}-${second}`)
    }
   
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);    
}

emitter.on('start', console.log);
emitter.on('stop', console.log);

initializeClock(deadline);





