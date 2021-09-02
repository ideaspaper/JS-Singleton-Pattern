const Singleton = require('./singleton');

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1);
console.log(instance2);
console.log(instance1 === instance2);

