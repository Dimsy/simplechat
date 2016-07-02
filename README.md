# simplechat
Simple chat on Node.js (server module + client script)

You can test it [here](http://198.199.90.88/)

Starting server side:

- Install Nodejs (sudo apt-get update, sudo apt-get install nodejs)
- Copy server.js on your server
- Cd to server.js dir and install socket.io (sudo apt-get install npm, npm install socket.io)
- Start server.js (nohup node server.js)
- Rejoice!

- If you want to keep chat logs start server with 
	```
	nohup node server.js &>> messages.log
	```

Including client side:

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
	* Online users counter
	```html
	<div id="online"></div>
	```

	* Nickname element
	```html
	<input type="text" id="nickname" placeholder="Nickname"></input>
	```
	* Input element
	```html
	<input type="text" size="30" id="messageText" placeholder="Enter to send..." maxlength="55"></input>
	```
		
- Message element created by SimpleChat is .chatMessage in CSS 