const EventEmitter = require('events');

// Create class
class MyEventEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEventEmitter();

// Event listener
myEmitter.on('someEvent', () => console.log('Event fired'));

// Init event
myEmitter.emit('someEvent');
myEmitter.emit('someEvent');
myEmitter.emit('someEvent');