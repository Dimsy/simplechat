var io = require('socket.io').listen(8081);
io.sockets.on('connection', function (socket) {
	socket.on('hello', function (data){
		pplCount = io.engine.clientsCount;
		socket.broadcast.send('Connected: '+data);
		io.sockets.emit('pplCount', pplCount);
		console.log(data);
	});
	
	socket.on('disconnect', function(data) {
		
		pplCount = io.engine.clientsCount;
		io.sockets.emit('pplCount', pplCount);
	});
	
	socket.on('quit', function(data) {
	socket.broadcast.send(data+" disconnected");
	});
	
	socket.on('message', function (msg) 
	{
		socket.broadcast.send(msg);
		socket.send(msg);
		console.log(msg);
	});
});


