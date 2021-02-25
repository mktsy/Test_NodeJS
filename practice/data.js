const fs = require('fs');
fs.writeFileSync('test.txt', 'Name: ');
fs.appendFileSync('test.txt', 'Kujo Jotaro\n')

fs.appendFileSync('test.txt', 'Name: Josepth Jostar')