const Person = require('./Person');
const person = new Person('Pablo', 30);
person.greeting();

const Logger = require('./Logger');
const logger = new Logger();

logger.on('message', data => {
    console.log('Called listener', data);
});

logger.log('Hello World!');
logger.log('Hello!');
logger.log('World!');