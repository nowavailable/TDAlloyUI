var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8080/events/');


ws.send("aaaa")
ws.terminate();


require('websocket-stream');
var fs = require('fs')
fs.createReadStream()
