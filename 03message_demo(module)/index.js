const message = require('./message')

console.log(message);
console.log(message.get());
message.del(9)
console.log(message.add('nodema', '哈哈哈哈'));
console.log(message.get());