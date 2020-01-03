const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (num1, num2)=>{
    console.log(num1 + num2);
});
eventEmitter.on('tutorials', ()=>{
    console.log('tutorial event has occurred');
});
eventEmitter.emit('tutorial',1,2);
eventEmitter.emit('tutorials');

class Person extends EventEmitter{
        constructor(name){
            super();
            this._name = name;
        }
        get name(){
            return this._name; 
        }
}
let pedro = new Person('Pedro');
let chris = new Person('Chris');

pedro.on('name', ()=>{
    console.log('My Name is ' + pedro.name);

});

chris.on('name', ()=>{
    console.log('My Name is ' + chris.name);

});
pedro.emit('name');
chris.emit('name');
