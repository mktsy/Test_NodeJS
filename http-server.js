const http = require('http');
const server = http.createServer(function(req, res){
    var obj = {
        name: 'Jotaro', 
        email: 'jojozanaruk5@gmail.com', 
        tel: '0699878778'
    };
    if(req.url === '/'){
        res.write('You are at home page');
        res.end();
    }
    if(req.url === '/contract'){
        res.write(JSON.stringify(obj));
        res.end();
    }
});

server.addListener('connection', function(socket){
    console.log('Client connected');
});

server.listen(3000)
console.log('Listening form port 3000');