const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('myEvent1', function(args){
    console.log('you met myEvent with: ', args);
});

emitter.addListener('myEvent2', function(args1, args2){
    console.log('you met myEvent2 with: ', args1, args2);
});

emitter.emit('myEvent1', {id: 01, name: 'Jotaro'}); // Object
emitter.emit('myEvent1', {type: 'response', content_type: 'text/html', header: '200 OK'}); //Object

emitter.emit('myEvent2', 1, 'Jotaro')
