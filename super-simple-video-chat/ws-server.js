var WebSocket = require("ws");
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8088});

var allCons = [];

wss.on('connection', function(ws){
	allCons.push(ws);
	
	ws.on('close', function(){
		allCons.splice(allCons.indexOf(ws),1);
		console.log('WS closed!')
	});

	ws.on('message', function(message){
		console.log('Got ws message: '+message);
		for(var i=0;i<allCons.length;i++){
			// send to everybody on the site
			allCons[i].send(message);
		}
	});
});

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/static'));
app.listen(8888);