var io = require('socket.io').listen(8081);

io.sockets.on('connection', function (socket) {
	socket.on('hello', function (data){
		socket.broadcast.send('Connected: '+data);
		console.log(data);
	});
	socket.on('message', function (msg) 
	{
		socket.broadcast.send(msg);
		socket.send(msg);
		console.log(msg);
	});
});


