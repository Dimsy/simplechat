# simplechat
Simple chat on Node.js (server module + client script)

You can test it [here](http://198.199.90.88/)

Starting server side:

- Install Nodejs (sudo apt-get update, sudo apt-get install nodejs)
- Copy server.js on your server
- Cd to server.js dir and start server.js (nohup node server.js)
- Rejoice!

Include client side:

- 	On you page:
	```html
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="your/path/to/socket.io.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script src="chat.js"></script>
	```
	
-  Create elements:
	* Chat frame with messages
	```html
	<div class="chatFrame" id="chatFrame"></div>
	```
	* Input element
	```html
	<div class="chatControl" id="chatControl">
		<div class="inputZone" id="inputZone">
		<span><input type="text" size="30" id="messageText" placeholder="Enter to send..." maxlength="55" onkeypress="sendMessage(event)"></input></span>
		</div>
	</div>
	```
		
- Message element created by SimpleChat is .chatMessage in CSS 