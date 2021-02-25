const os = require('os');
var freeMemory = os.freemem();
console.log(freeMemory);

var userInfo = os.userInfo();
console.log(userInfo);