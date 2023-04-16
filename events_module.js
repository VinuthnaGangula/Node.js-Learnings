var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventHandlerFunction = function (){
    console.log('Event Triggered');
}

eventEmitter.on('trigger', eventHandlerFunction);

eventEmitter.emit('trigger');
