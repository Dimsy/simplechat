# simplechat
Simple chat on Node.js (server module + client script)

Starting server side:

1) Install Nodejs (sudo apt-get update, sudo apt-get install nodejs)
2) Copy server.js on your server
3) Cd to server.js dir and start server.js (nohup node server.js)
4) Rejoice!

Include client side:

1) 	On you page:
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="your/path/to/socket.io.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script src="chat.js"></script>
	
2) Create elements:
	2.1) <div class="chatFrame" id="chatFrame"></div> - chat frame with messages
	2.2) <div class="chatControl" id="chatControl"> - input element
			<div class="inputZone" id="inputZone">
			<span><input type="text" size="30" id="messageText" placeholder="Enter to send..." maxlength="55" onkeypress="sendMessage(event)"></input></span>
			</div>
		</div>
		
// Message element created by SimpleChat is .chatMessage in CSS 