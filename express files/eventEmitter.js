var events = require('events'); //event : allow user to create events such as popup, alert, etc.
var eventsEmitter = events.EventEmitter(); //handles every event

//CREATION OF EVENT HANDLER TO ACKNOWLEDGE ONE EVENT
var myEventHandler=function(){
    console.log('I AM A STUDENT');
}

eventsEmitter.on('KEY',myEventHandler); //myEventHandler is called
eventsEmitter.emit('KEY'); //executing