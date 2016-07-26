var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/events', function(req, res){
  console.log('received', req.body);
  io.emit('event', req.body);
  res.send('OK');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8010, function(){
  console.log('listening on port 8010');
});
