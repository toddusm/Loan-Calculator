var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = 8080

app.listen(port, function(){
	console.log("server is listening on port" + port);
})

app.get('/interest_rate', function(req, res){
	var rate = Math.floor(Math.random() * (20 - 1) + 1) / 100;
	res.json(rate)
})

