const events = require('events');
const eventEmitter = new events.EventEmitter();

// event handler
const myEventHandler = () => {
  console.log('Somebody hollered!');
}

// assign event handler to event
eventEmitter.on('holler', myEventHandler);

// emit event
eventEmitter.emit('holler');