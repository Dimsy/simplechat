var name = Math.round(Math.random() * 100);
var messcount = 0;
var socket = io.connect('http://198.199.90.88:8081/');
	socket.on('connect', function (data)
	{
		socket.emit('hello','#'+name);
		messcount++;
	});
		
	socket.on('message', function (data)
	{
		console.log(messcount);
		if (messcount > 20)
		{
			$('#chatFrame').find('div').first().remove();
		}
		var new_mess = document.createElement('div');
		new_mess.className = "chatMessage";
		new_mess.id = "chatMessage";
		new_mess.innerHTML = data;
		document.getElementById('chatFrame').appendChild(new_mess);
		messcount++;
	});
	
	function sendMessage(e)
	{
		if (e.keyCode == 13) {
			var send_mess=document.getElementById('messageText');	
			socket.emit('message',name+": "+send_mess.value);
			send_mess.value='';
		}
	}
	
window.onload = function() {
  document.getElementById("messageText").focus();
};